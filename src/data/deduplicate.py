import json
import re

def deduplicate():
    path = 'src/data/questions.json'
    with open(path, 'r') as f:
        data = json.load(f)

    unique_data = []
    seen_texts = set()

    for item in data:
        # Normalize text for comparison: remove newlines, extra spaces
        text_norm = re.sub(r'\s+', ' ', item['text']).strip()
        
        # Also, the Brainscape import might have included the "Question" line inside the text?
        # The text I imported: "A business... \n\nWhat...?"
        # The text I had: "A business... What...?"
        # Normalization should handle it.
        
        if text_norm in seen_texts:
            print(f"Removing duplicate: {item['id']}")
            continue
            
        seen_texts.add(text_norm)
        unique_data.append(item)

    # Re-assign IDs to be contiguous q1...qN
    for index, item in enumerate(unique_data):
        item['id'] = f"q{index + 1}"

    print(f"Total unique questions: {len(unique_data)}")

    with open(path, 'w') as f:
        json.dump(unique_data, f, indent=2)

if __name__ == "__main__":
    deduplicate()
