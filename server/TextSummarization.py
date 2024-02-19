from sumy.parsers.plaintext import PlaintextParser
from sumy.nlp.tokenizers import Tokenizer
from sumy.summarizers.lsa import LsaSummarizer
import json
import nltk
nltk.download('punkt')
# Load the input text from a file
with open('input.txt', 'r', encoding='utf-8') as file:
    input_text = file.read()

# Initialize the parser and tokenizer
parser = PlaintextParser.from_string(input_text, Tokenizer("english"))

# Initialize the LSA summarizer
summarizer = LsaSummarizer()
summary = summarizer(parser.document, 3)  # Number of sentences in the summary

# Store the results in a JSON file
output_data = {
    "input_text": input_text,
    "summary": " ".join(str(sentence) for sentence in summary)
}

with open('output.json', 'w', encoding='utf-8') as output_file:
    json.dump(output_data, output_file, ensure_ascii=False, indent=4)

print("Text summarization results have been stored in output.json")

