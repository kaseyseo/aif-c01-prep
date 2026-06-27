import { getRequestContext } from '@cloudflare/next-on-pages';
import paidQuestionsData from "@/data/questions-paid.json";

export const runtime = 'edge';

export interface Question {
    id: string;
    text: string;
    options: string[];
    correctAnswer: string | string[];
    explanation: string;
    topic: string;
    multiSelect?: boolean;
}

interface TokenRecord {
    used: boolean;
    generatedAt: number;
    questionIDs: string[];
}

function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

export async function GET(request: Request): Promise<Response> {
    try {
        const { env } = getRequestContext();
        const tokens = (env as any).TOKENS;
        const url = new URL(request.url);
        const token = url.searchParams.get("token");
        const count = parseInt(url.searchParams.get("count") || "65", 10);

        // Check if token exists
        if (!token) {
            return new Response(JSON.stringify({ error: "No token provided" }), {
                status: 403,
                headers: { "Content-Type": "application/json" }
            });
        }

        // Look up token in KV
        const tokenRecord = await tokens.get(token, 'json') as TokenRecord | null;
        if (!tokenRecord) {
            return new Response(JSON.stringify({ error: "Invalid or expired token" }), {
                status: 403,
                headers: { "Content-Type": "application/json" }
            });
        }

        let questionIDs: string[];

        if (tokenRecord.used === false) {
            // First generation: create a new question set
            const questions: Question[] = paidQuestionsData;
            const shuffled = shuffleArray(questions);
            const selected = shuffled.slice(0, count);
            questionIDs = selected.map(q => q.id);

            // Store the used token with the generated question set
            const updatedRecord: TokenRecord = {
                used: true,
                generatedAt: Date.now(),
                questionIDs: questionIDs
            };
            await tokens.put(token, JSON.stringify(updatedRecord));
        } else {
            // Token is already used — check if within 90-minute window
            const elapsedMs = Date.now() - tokenRecord.generatedAt;
            const elapsedMinutes = elapsedMs / 1000 / 60;

            if (elapsedMinutes >= 90) {
                // Session expired
                return new Response(JSON.stringify({ error: "Session expired" }), {
                    status: 403,
                    headers: { "Content-Type": "application/json" }
                });
            }

            // Return the same question set (resumable)
            questionIDs = tokenRecord.questionIDs;
        }

        // Fetch the full question objects by IDs
        const allPaidQuestions: Question[] = paidQuestionsData;
        const selectedQuestions = allPaidQuestions.filter(q => questionIDs.includes(q.id));

        // Shuffle options for each question (randomized per session)
        const withShuffledOptions = selectedQuestions.map(q => ({
            ...q,
            options: shuffleArray(q.options)
        }));

        return new Response(JSON.stringify(withShuffledOptions), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        console.error("Error in /api/mock-questions:", error);
        return new Response(JSON.stringify({ error: "Internal server error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
