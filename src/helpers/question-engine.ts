import questionsData from "@/data/questions.json";

export interface Question {
    id: string;
    text: string;
    options: string[];
    correctAnswer: string | string[];
    explanation: string;
    topic: string;
    multiSelect?: boolean;
}

export function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

export function getRandomQuestions(count: number, excludeIds: string[] = []): Question[] {
    // Separate unseen and seen questions
    const unseen = questionsData.filter(q => !excludeIds.includes(q.id));
    const seen = questionsData.filter(q => excludeIds.includes(q.id));

    let selected: Question[] = [];

    if (unseen.length >= count) {
        // If we have enough unseen, pick randomly from them
        selected = shuffleArray(unseen).slice(0, count);
    } else {
        // If not enough unseen, take ALL unseen first
        selected = [...unseen];

        // Then fill the rest from seen questions (shuffled)
        const remainder = count - selected.length;
        const shuffledSeen = shuffleArray(seen);
        selected = [...selected, ...shuffledSeen.slice(0, remainder)];
    }

    // Shuffle the final selection so the "new" ones aren't always at the top of the list
    return shuffleArray(selected);
}

export function getAllQuestions(): Question[] {
    return questionsData;
}

export function getQuestionCount(): number {
    return questionsData.length;
}

export function calculateScore(userAnswers: Record<string, string | string[]>, questions: Question[]) {
    let correct = 0;
    questions.forEach(q => {
        const ua = userAnswers[q.id];
        if (Array.isArray(ua) && Array.isArray(q.correctAnswer)) {
            // Strict equality for arrays: same length and every item matches
            if (ua.length === q.correctAnswer.length &&
                ua.every(val => (q.correctAnswer as string[]).includes(val))) {
                correct++;
            }
        } else if (ua === q.correctAnswer) {
            correct++;
        }
    });
    const total = Math.max(questions.length, 1); // Prevent division by zero
    return {
        correct,
        total,
        percentage: Math.round((correct / total) * 100)
    };
}
