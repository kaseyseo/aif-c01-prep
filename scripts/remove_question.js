const fs = require('fs');
const path = require('path');

const QUESTIONS_FILE = path.join(__dirname, '../src/data/questions.json');

try {
    const data = fs.readFileSync(QUESTIONS_FILE, 'utf8');
    let questions = JSON.parse(data);

    const initialCount = questions.length;

    // exact text to remove
    const targetText = "What capabilities are considered when selecting a foundation model for a specific task? (Select all that apply.)";

    // Filter out the question(s)
    const newQuestions = questions.filter(q => {
        if (q.text.includes("What capabilities are considered when selecting a foundation model for a specific task?")) {
            console.log(`Removing question ID: ${q.id}`);
            return false;
        }
        return true;
    });

    if (newQuestions.length === initialCount) {
        console.log("No questions found matching the text.");
    } else {
        fs.writeFileSync(QUESTIONS_FILE, JSON.stringify(newQuestions, null, 2));
        console.log(`Removed ${initialCount - newQuestions.length} question(s).`);
        console.log(`New total: ${newQuestions.length}`);
    }

} catch (err) {
    console.error("Error:", err);
}
