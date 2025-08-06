# app.py
from flask import Flask, request, jsonify
from chatbot import generate_motivation_letter

app = Flask(__name__)

# API route to handle chat requests
@app.route('/generate-letter', methods=['POST'])
def generate_letter():
    data = request.get_json()
    academic_background = data.get("academic_background", "")
    career_goals = data.get("career_goals", "")
    relevant_experience = data.get("relevant_experience", "")
    why_this_university = data.get("why_this_university", "")

    if all([academic_background, career_goals, relevant_experience, why_this_university]):
        letter = generate_motivation_letter(
            academic_background, career_goals, relevant_experience, why_this_university
        )
        return jsonify({"motivation_letter": letter})
    else:
        return jsonify({"error": "Missing required fields"}), 400

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5000)


# curl -X POST http://localhost:5000/generate-letter \
#   -H "Content-Type: application/json" \
#   -d '{
#     "academic_background": "BSc in Computer Science from XYZ University",
#     "career_goals": "Become a leading AI researcher",
#     "relevant_experience": "Internship at ABC Labs, published paper on NLP",
#     "why_this_university": "Renowned AI faculty and research facilities"
#   }'