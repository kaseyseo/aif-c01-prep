import json
import re

def process_multiselect():
    path = 'src/data/questions.json'
    with open(path, 'r') as f:
        data = json.load(f)

    updated_count = 0

    for item in data:
        # Check if question text indicates multiple selection
        text = item['text']
        
        # Look for "(Select TWO)" or similar (case insensitive)
        if re.search(r'\(Select\s+TWO\)', text, re.IGNORECASE) or \
           re.search(r'\(Select\s+THREE\)', text, re.IGNORECASE) or \
           re.search(r'Select\s+TWO', text, re.IGNORECASE):
            
            item['multiSelect'] = True
            
            # Now we need to fix correctAnswer.
            # Currently it might be a single string "Answer 1"
            # But we need "Answer 1" AND "Answer 2"
            
            # The explanation usually lists the correct answers like:
            # "2. Amazon Textract\n3. Amazon Polly\n\nExplanation..."
            
            # We can parse the explanation to find lines that look like "N. Answer Text"
            # AND match them against the options.
            
            explanation = item.get('explanation', '')
            options = item.get('options', [])
            
            correct_answers = []
            
            # Split explanation by lines
            exp_lines = explanation.split('\n')
            
            # Heuristic: The first few lines of explanation often list the correct answers e.g. "1. Option A\n2. Option B"
            # or "Correct answers:\nOption A\nOption B" -> Brainscape seems to use "N. Option" format at the start.
            
            # Let's try to match options against the first 500 chars of explanation
            
            # Also, sometimes the 'correctAnswer' field ALREADY has one of them.
            # If we can't find others, we should at least keep the existing one.
            
            existing_correct = item['correctAnswer']
            if isinstance(existing_correct, list):
                # Already processed?
                correct_answers = existing_correct
            else:
                correct_answers.append(existing_correct)
            
            # Try to find other answers in explanation
            # Look for lines starting with digit+dot "1. ", "2. "
            # And check if the text matches an option.
            
            for line in exp_lines:
                line = line.strip()
                # Check for "N. Text"
                match = re.match(r'^\d+\.\s*(.+)', line)
                if match:
                    potential_answer = match.group(1).strip()
                    
                    # Verify if this potential answer is in options
                    # We need exact match or close match?
                    # Let's try exact match first
                    
                    if potential_answer in options:
                        if potential_answer not in correct_answers:
                            correct_answers.append(potential_answer)
                            
            # Special logic for q55 (Select TWO) if it failed or if we want to be sure
            # q55 options: ["Amazon Comprehend", "Amazon Textract", "Amazon Polly", "Amazon Lex", "Amazon Rekognition"]
            # q55 explanation starts: "2. Amazon Textract\n3. Amazon Polly"
            # My current logic should catch this.
            
            item['correctAnswer'] = correct_answers
            updated_count += 1
        else:
            item['multiSelect'] = False
            # Ensure correctAnswer is string (or maybe we migrate ALL to array? 
            # Implementation plan said "string | string[]" or "string[]")
            # Let's standardise on string for single, array for multi? Or just always array?
            # To minimize breakage, maybe keep string for single for now, BUT 
            # the frontend updates might be cleaner if we use arrays everywhere or use a helper.
            # The plan said: "Update Question interface correctAnswer to potentially be string | string[]"
            
            # So I will leave single answers as string.
            pass

    print(f"Updated {updated_count} questions to multi-select.")

    with open(path, 'w') as f:
        json.dump(data, f, indent=2)

if __name__ == "__main__":
    process_multiselect()
