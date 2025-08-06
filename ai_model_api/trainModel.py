# trainModel.py
"""
Script to fine-tune GPT-2 for generating motivation letters.

Prepare your data as 'motivation_letters.txt' with each example like:
    Academic Background: <user_academic_background>
    Career Goals: <user_career_goals>
    Relevant Experience: <user_relevant_experience>
    Why This University: <user_why_this_university>
    Motivation Letter:
    <motivation_letter_text>
    <END>

Each sample should be separated by <END> or a blank line.
"""

# Import necessary libraries from Hugging Face Transformers and PyTorch
from transformers import GPT2Tokenizer, GPT2LMHeadModel, TextDataset, DataCollatorForLanguageModeling, Trainer, TrainingArguments
import os
import torch

# Constants / Configs
MODEL_NAME = "gpt2"                          # Base GPT-2 model from Hugging Face
DATA_PATH = "motivation_letters.txt"       # Path to your motivation letter training data
OUTPUT_DIR = "gpt2-finetuned-motivation"   # Where to save the fine-tuned model
EPOCHS = 3                                   # Number of times to go through the dataset
BATCH_SIZE = 2                               # Batch size for training
BLOCK_SIZE = 128                             # Length of input text blocks for the model

# 1. Load tokenizer and model
print("Loading model and tokenizer...")
tokenizer = GPT2Tokenizer.from_pretrained(MODEL_NAME)         # Load GPT-2 tokenizer
model = GPT2LMHeadModel.from_pretrained(MODEL_NAME)           # Load pre-trained GPT-2 model

# Set the pad token to the end-of-sequence token to avoid padding issues
tokenizer.pad_token = tokenizer.eos_token

# 2. Prepare dataset
print("Preparing dataset...")
def load_dataset(file_path, tokenizer, block_size=BLOCK_SIZE):
    # Create a TextDataset that splits the input file into blocks of text for training
    return TextDataset(
        tokenizer=tokenizer,        # Use GPT-2 tokenizer
        file_path=file_path,        # Path to the training data file
        block_size=block_size       # Number of tokens per training sample
    )

# Load the training dataset using the above function
train_dataset = load_dataset(DATA_PATH, tokenizer)

# Data collator dynamically pads batches of data during training
data_collator = DataCollatorForLanguageModeling(
    tokenizer=tokenizer,
    mlm=False,                     # GPT-2 uses causal language modeling, not masked language modeling
)

# 3. Define training arguments
training_args = TrainingArguments(
    output_dir=OUTPUT_DIR,                    # Output directory to save model checkpoints
    overwrite_output_dir=True,                # Overwrite previous training output
    num_train_epochs=EPOCHS,                  # Number of training epochs
    per_device_train_batch_size=BATCH_SIZE,   # Batch size per GPU/CPU
    save_steps=500,                           # Save a checkpoint every 500 steps
    save_total_limit=2,                       # Keep only the latest 2 checkpoints
    prediction_loss_only=True,                # Only compute loss (no metrics)
    fp16=True if torch.cuda.is_available() else False,  # Use mixed-precision if GPU supports it
)

# 4. Create the Trainer object
trainer = Trainer(
    model=model,                        # The GPT-2 model to be fine-tuned
    args=training_args,                 # Training configurations
    data_collator=data_collator,       # Handles batching and padding
    train_dataset=train_dataset,       # Dataset to train on
)

# 5. Train and save the model
print("Starting training...")
trainer.train()                            # Begin training loop

print(f"Saving model to {OUTPUT_DIR} ...")
trainer.save_model(OUTPUT_DIR)            # Save the fine-tuned model
tokenizer.save_pretrained(OUTPUT_DIR)     # Save the tokenizer (with updated pad token)

print("Training complete. Model and tokenizer saved.")
