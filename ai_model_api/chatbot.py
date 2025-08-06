from transformers import GPT2Tokenizer, GPT2LMHeadModel
import torch

# Load the fine-tuned model and tokenizer
model = GPT2LMHeadModel.from_pretrained("gpt2-finetuned-motivation")
tokenizer = GPT2Tokenizer.from_pretrained("gpt2-finetuned-motivation")


def generate_motivation_letter(academic_background, career_goals, relevant_experience, why_this_university):
    # Format the prompt as in your training data
    prompt = (
        f"Academic Background: {academic_background}\n"
        f"Career Goals: {career_goals}\n"
        f"Relevant Experience: {relevant_experience}\n"
        f"Why This University: {why_this_university}\n"
        "Motivation Letter:\n"
    )
    inputs = tokenizer.encode(prompt, return_tensors="pt")
    attention_mask = torch.ones_like(inputs)

    with torch.no_grad():
        outputs = model.generate(
            inputs,
            attention_mask=attention_mask,
            max_length=512,
            num_return_sequences=1,
            pad_token_id=tokenizer.eos_token_id,
            do_sample=True,
            top_p=0.92,
            top_k=50,
            temperature=0.7,
            no_repeat_ngram_size=2
        )

    response = tokenizer.decode(outputs[0], skip_special_tokens=True)
    # Extract only the generated letter
    if "Motivation Letter:" in response:
        response = response.split("Motivation Letter:")[1].strip()
    if "<END>" in response:
        response = response.split("<END>")[0].strip()
    return response

# Sample Test
if __name__ == "__main__":
    academic_background = "BSc in Computer Science from XYZ University"
    career_goals = "Become a leading AI researcher"
    relevant_experience = "Internship at ABC Labs, published paper on NLP"
    why_this_university = "Renowned AI faculty and research facilities"
    print(generate_motivation_letter(academic_background, career_goals, relevant_experience, why_this_university))
