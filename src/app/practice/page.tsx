import { Suspense } from "react";
import PracticeSession from "@/components/session/PracticeSession";

export default function PracticePage() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <PracticeSession />
        </Suspense>
    );
}
