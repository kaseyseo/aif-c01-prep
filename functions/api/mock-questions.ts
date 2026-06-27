import paidQuestionsData from "../../src/data/questions-paid.json";

export interface Question {
    id: string;
    text: string;
    options: string[];
    correctAnswer: string | string[];
    explanation: string;
    topic: string;
    multiSelect?: boolean;
}

function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

export default async function handler(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const count = parseInt(url.searchParams.get("count") || "65", 10);

    const questions: Question[] = paidQuestionsData;

    // Select a random subset
    const shuffled = shuffleArray(questions);
    const selected = shuffled.slice(0, count);

    // Shuffle the options for each question
    const withShuffledOptions = selected.map(q => ({
        ...q,
        options: shuffleArray(q.options)
    }));

    return new Response(JSON.stringify(withShuffledOptions), {
        headers: { "Content-Type": "application/json" }
    });
}
