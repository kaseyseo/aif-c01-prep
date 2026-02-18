import json
import re

def parse_questions():
    with open('src/data/raw_questions.json', 'r') as f:
        raw_data = json.load(f)

    with open('src/data/questions.json', 'r') as f:
        existing_questions = json.load(f)

    # Determine next ID
    # Existing IDs are "q1"..."q29"
    # Logic: find max number in existing IDs
    max_id = 0
    for q in existing_questions:
        match = re.search(r'q(\d+)', q['id'])
        if match:
            num = int(match.group(1))
            if num > max_id:
                max_id = num
    
    current_id = max_id + 1
    new_questions = []

    # Map of existing question texts to avoid duplicates
    existing_texts = {q['text'].strip() for q in existing_questions}

    for item in raw_data:
        q_raw = item['q']
        a_raw = item['a']

        # Parse Question and Options
        # Logic: Options are usually the last few lines. 
        # We look for lines that look like options (start with capital letter? or just split by newline)
        # Brainscape format seems to be: Question block \n\n Option 1 \n Option 2 ...
        
        lines = q_raw.split('\n')
        # Filter empty lines
        lines = [l.strip() for l in lines if l.strip()]
        
        # Heuristic: Options are the last 4-5 lines.
        # But wait, usually 4 options.
        if len(lines) < 5:
            # Maybe question is one line, options 4 lines = 5 lines total
            # If less, something is wrong or options are inline.
            # print(f"Skipping malformed question: {lines[0]}")
            # continue
            pass

        # Identify where options start
        # Often there's a question mark?
        # Let's assume the last 4 lines are options for simplicity, 
        # UNLESS the question is "Select TWO" -> then maybe 5 options?
        
        # Check if "Select TWO" is in text
        is_multiple_select = "(Select TWO" in q_raw
        
        num_options = 5 if is_multiple_select else 4
        
        # Sometimes there's a prompt "Which...?" before options.
        
        # Let's try to take the last N lines as options
        options = lines[-num_options:]
        question_text = "\n".join(lines[:-num_options])
        
        # Check format of correct answer
        # a_raw starts with "1. Option Text" or "2. Option Text" etc.
        # We need to extract the correct option text.
        
        a_lines = a_raw.split('\n')
        correct_line = a_lines[0].strip() # e.g. "1. Batch transform"
        
        # Explanation is the rest
        explanation = "\n".join(a_lines[1:]).strip()
        
        # Clean up correct answer line (remove "1. ", "2. ")
        # Also need to find WHICH option matches this text to exact string match
        # Brainscape answers use "1. ", "2. " referencing the stored order.
        # BUT the order in 'q_raw' might just be the list.
        # Let's clean the prefix number from correct_line
        
        correct_text_match = re.match(r'^\d+\.\s*(.*)', correct_line)
        if correct_text_match:
            correct_text_cleaned = correct_text_match.group(1)
        else:
            correct_text_cleaned = correct_line

        # Verify if correct_text matches one of the options
        # If not, maybe we parsed options wrong
        
        final_correct_answer = correct_text_cleaned
        
        # Sometimes options in 'q' are just "Batch transform", but answer is "1. Batch transform"
        # We should ensure 'final_correct_answer' is exactly one of the 'options' strings.
        # Allow fuzzy match?
        
        # Refine option parsing: 
        # If options lines look like "Batch transform", "Real-time inference"
        
        # Check against existing
        if question_text.strip() in existing_texts:
            print(f"Skipping duplicate: {question_text[:30]}...")
            continue
            
        new_q = {
            "id": f"q{current_id}",
            "text": question_text,
            "options": options,
            "correctAnswer": final_correct_answer,
            "explanation": explanation,
            "topic": "Machine Learning" # Default, maybe infer?
        }
        
        new_questions.append(new_q)
        current_id += 1

    print(f"Adding {len(new_questions)} new questions.")
    
    # Append
    existing_questions.extend(new_questions)
    
    with open('src/data/questions.json', 'w') as f:
        json.dump(existing_questions, f, indent=2)

if __name__ == "__main__":
    parse_questions()
