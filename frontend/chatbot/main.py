"""
Install the Google AI Python SDK

$ pip install google-generativeai
"""

from flask import Flask, request, jsonify
import os
from dotenv import load_dotenv
from flask_cors import CORS
import google.generativeai as genai

load_dotenv()
api_key = os.getenv("API_KEY")
print(api_key)
genai.configure(api_key=api_key)


app = Flask(__name__)
CORS(app)

# Create the model
generation_config = {
  "temperature": 0.9,
  "top_p": 0.95,
  "top_k": 64,
  "max_output_tokens": 8192,
  "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
  model_name="gemini-1.5-flash",
  generation_config=generation_config,
  # safety_settings = Adjust safety settings
  # See https://ai.google.dev/gemini-api/docs/safety-settings
)

chat_session = model.start_chat(
  history=[
    {
      "role": "user",
      "parts": [
        "hi",
      ],
    },
    {
      "role": "model",
      "parts": [
        "Hi there! How can I help you today? \n",
      ],
    },
    {
      "role": "user",
      "parts": [
        "hello",
      ],
    },
    {
      "role": "model",
      "parts": [
        "Hello! What can I do for you today? \n",
      ],
    },
    {
      "role": "user",
      "parts": [
        "what courses are available ?\n",
      ],
    },
    {
      "role": "model",
      "parts": [
        "We are providing many courses...\nTo  see them, visit our course page\nUse navbar to navigate to course page\n",
      ],
    },
    {
      "role": "user",
      "parts": [
        "can i create todo for my work?",
      ],
    },
    {
      "role": "model",
      "parts": [
        "Yeah! Of Course. You can create todos in calendar that is provided in our app. \nClick on calendar to create todos",
      ],
    },
    {
      "role": "user",
      "parts": [
        "I am good at study by lacks confidence.\n",
      ],
    },
    {
      "role": "model",
      "parts": [
        "Don't worry.\nWe are providing tech talks weekly and motivational quotes daily.\nWatch them to develop your career and confidence.",
      ],
    },
    {
      "role": "user",
      "parts": [
        "Thank you\n",
      ],
    },
    {
      "role": "model",
      "parts": [
        "You're very welcome!  I'm glad I could help. \n\nIs there anything else I can help you with today? \n",
      ],
    },
    {
      "role": "user",
      "parts": [
        "is there any references available?",
      ],
    },
    {
      "role": "model",
      "parts": [
        "Yeah.\nThere is more references available in our website.\nVisit our Reference Page to see it.",
      ],
    },
  ]
)


# Define a route to handle chat messages
@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get("message")
    if not user_input:
        return jsonify({"error": "No input provided"}), 400

    # Send message to the chat session
    response = chat_session.send_message(user_input)

    # Return the model's response
    return jsonify({"response": response.text})

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)