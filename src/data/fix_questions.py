import json
import re

def fix_questions():
    # Load original full list from raw
    with open('src/data/raw_questions.json', 'r') as f:
        raw_data = json.load(f)

    # Load current file
    with open('src/data/questions.json', 'r') as f:
        current_data = json.load(f)

    # Keep only q1-q26
    # Original dataset size was 26? I should check ID q26 exists.
    # Current data has up to q67 or so.
    
    # Filter out anything > q26
    # Or just keep the first 26 items?
    # IDs are "q1"..."q26".
    
    base_questions = []
    for item in current_data:
        # Check if ID is q1...q26
        # Parse number
        match = re.search(r'q(\d+)', item['id'])
        if match:
            num = int(match.group(1))
            if num <= 26:
                base_questions.append(item)
    
    print(f"Retained {len(base_questions)} base questions.")

    # Now process raw data again to produce the 40 new questions
    new_questions = []
    start_id = 27
    
    for item in raw_data:
        q_raw = item['q']
        a_raw = item['a']
        
        lines = q_raw.split('\n')
        lines = [l.strip() for l in lines if l.strip()]
        
        is_multiple_select = "(Select TWO" in q_raw
        num_options = 5 if is_multiple_select else 4
        
        options = lines[-num_options:]
        question_text = "\n".join(lines[:-num_options])
        
        a_lines = a_raw.split('\n')
        correct_line = a_lines[0].strip()
        
        correct_text_match = re.match(r'^\d+\.\s*(.*)', correct_line)
        if correct_text_match:
            correct_text_cleaned = correct_text_match.group(1)
        else:
            correct_text_cleaned = correct_line
            
        explanation = "\n".join(a_lines[1:]).strip()
        
        new_q = {
            "id": f"q{start_id}",
            "text": question_text,
            "options": options,
            "correctAnswer": correct_text_cleaned,
            "explanation": explanation,
            "topic": "Machine Learning" 
        }
        
        new_questions.append(new_q)
        start_id += 1
        
    print(f"Processed {len(new_questions)} new questions.")
    
    final_list = base_questions + new_questions
    print(f"Final count: {len(final_list)}")
    
    with open('src/data/questions.json', 'w') as f:
        json.dump(final_list, f, indent=2)

if __name__ == "__main__":
    fix_questions()
