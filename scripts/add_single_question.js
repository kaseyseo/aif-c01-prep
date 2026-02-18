const fs = require('fs');
const path = require('path');

const QUESTIONS_FILE = path.join(__dirname, '../src/data/questions.json');

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

const newId = `q${maxId + 1}`;

const newQuestion = {
    id: newId,
    text: "A media company wants to create a tool that generates unique, high-quality images for marketing materials, including custom artwork and logos. They need a model that can create diverse visual outputs, ensuring high resolution and sharp details, and the ability to control specific attributes of the generated images. Which type of generative model would be the most appropriate choice for this project?",
    options: [
        "Large Language Model (LLM)",
        "Generative Adversarial Network (GAN)",
        "Variational Autoencoder (VAE)",
        "Diffusion Model"
    ],
    correctAnswer: "Diffusion Model",
    explanation: "Diffusion models (e.g., Stable Diffusion, DALL·E) are the state of the art for high-quality image generation. They generate images by progressively denoising random noise, which allows for the production of high-resolution, sharp, and diverse outputs with fine-grained control over visual attributes—making them well suited for marketing and creative applications.\n\nAn LLM is incorrect because it is designed for text generation rather than image synthesis. A GAN is incorrect because, although it can produce sharp images, it is harder to control and less stable to train. A VAE is incorrect because its generated images are typically blurrier and it is more commonly used for representation learning or anomaly detection rather than high-fidelity image generation.",
    topic: "Generative AI",
    multiSelect: false
};

// Check if duplicate (simple text check)
const isDuplicate = questions.some(q => q.text === newQuestion.text);
if (isDuplicate) {
    console.log("Question already exists! Skipping.");
} else {
    questions.push(newQuestion);
    fs.writeFileSync(QUESTIONS_FILE, JSON.stringify(questions, null, 2));
    console.log(`Question added successfully with ID: ${newId}`);
    console.log(`New Total Questions: ${questions.length}`);
}
