const fs = require('fs');
const path = require('path');

const QUESTIONS_FILE = path.join(__dirname, '../src/data/questions.json');
const NEW_QUESTIONS_FILE = path.join(__dirname, '../new_questions.txt');

// Read existing questions
let questions = [];
try {
    const data = fs.readFileSync(QUESTIONS_FILE, 'utf8');
    questions = JSON.parse(data);
} catch (err) {
    console.error("Error reading questions.json:", err);
    process.exit(1);
}

// Find max ID
let maxId = 0;
questions.forEach(q => {
    const match = q.id.match(/^q(\d+)$/);
    if (match) {
        const num = parseInt(match[1], 10);
        if (num > maxId) maxId = num;
    }
});
console.log(`Current Max ID: ${maxId}`);

// Read new questions text
let newQuestionsText = "";
try {
    newQuestionsText = fs.readFileSync(NEW_QUESTIONS_FILE, 'utf8');
} catch (err) {
    console.error("Error reading new_questions.txt:", err);
    process.exit(1);
}

// Parse new questions
const newQuestionsList = [];
// Split by "Question X" header or just blank lines if robust? 
// The format seems to be:
// Question X
// Q: ...
// Answer Choices
// A. ...
// ...
// Answer: ...
// Explanation
// ...

const rawBlocks = newQuestionsText.split(/^Question \d+/gm).filter(b => b.trim().length > 0);

console.log(`Found ${rawBlocks.length} distinct question blocks.`);

function normalizeText(text) {
    return text.replace(/\s+/g, ' ').trim();
}

let addedCount = 0;
let skippedCount = 0;

rawBlocks.forEach((block, index) => {
    try {
        // Extract Question Text
        const qMatch = block.match(/Q:\s*([\s\S]*?)(?=Answer Choices)/);
        if (!qMatch) return;
        let qText = normalizeText(qMatch[1]);

        // Extract Options
        const optionsBlockMatch = block.match(/Answer Choices\s*([\s\S]*?)(?=Answer:)/);
        if (!optionsBlockMatch) return;
        const optionsBlock = optionsBlockMatch[1];

        const options = [];
        const optionMap = {}; // "A" -> "Option text"

        const optionLines = optionsBlock.split('\n').map(l => l.trim()).filter(l => l);
        optionLines.forEach(line => {
            const match = line.match(/^([A-F])\.\s+(.*)/);
            if (match) {
                const letter = match[1];
                const text = normalizeText(match[2]);
                options.push(text);
                optionMap[letter] = text;
            }
        });

        // Extract Correct Answer codes
        const ansMatch = block.match(/Answer:\s*([A-F](?:,\s*[A-F])*)/);
        if (!ansMatch) {
            console.warn(`Could not find answer for question index ${index}`);
            return;
        }

        const correctCodes = ansMatch[1].split(',').map(c => c.trim());
        let correctAnswer;
        if (correctCodes.length === 1) {
            correctAnswer = optionMap[correctCodes[0]];
        } else {
            correctAnswer = correctCodes.map(c => optionMap[c]);
        }

        // Extract Explanation
        const expMatch = block.match(/Explanation\s*([\s\S]*)$/);
        const explanation = expMatch ? expMatch[1].trim() : "";

        const multiSelect = Array.isArray(correctAnswer);

        // Deduplication Check
        // Check if question text already exists (fuzzy check or exact normalization)
        const isDuplicate = questions.some(existing => normalizeText(existing.text) === qText);

        if (isDuplicate) {
            // console.log(`Skipping duplicate question: "${qText.substring(0, 50)}..."`);
            skippedCount++;
            return;
        }

        // Create new Question object
        maxId++;
        const newQuestion = {
            id: `q${maxId}`,
            text: qText,
            options: options,
            correctAnswer: correctAnswer,
            explanation: explanation,
            topic: "Generative AI", // Default topic
            multiSelect: multiSelect
        };

        questions.push(newQuestion);
        newQuestionsList.push(newQuestion);
        addedCount++;

    } catch (err) {
        console.error(`Error parsing block ${index}:`, err);
    }
});

// Write back to file
fs.writeFileSync(QUESTIONS_FILE, JSON.stringify(questions, null, 2));

console.log(`\nProcess Complete.`);
console.log(`Added: ${addedCount}`);
console.log(`Skipped (Duplicates): ${skippedCount}`);
console.log(`New Total Questions: ${questions.length}`);
