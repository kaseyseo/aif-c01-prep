const questions = require('./src/data/questions.json');
console.log(`Total questions: ${questions.length}`);
console.log(`Contains q58: ${questions.some(q => q.id === 'q58')}`);
console.log(`Contains q75: ${questions.some(q => q.id === 'q75')}`);
const q58 = questions.find(q => q.id === 'q58');
console.log('q58 text:', q58 ? q58.text.substring(0, 50) + '...' : 'Not found');
