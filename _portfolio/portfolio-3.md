---
title: "Disaster Tweet Classification Project"
excerpt: "A deep learning NLP project classifying tweets as real disasters or not. <br/><img src='/images/data_cleaning.png' width='500'/>"
collection: portfolio
date: 2025-10-07
---

# Disaster Tweet Classification Project

## Charlie Atkinson

![Data Cleaning Code](https://raw.githubusercontent.com/CharlieAtkinson/CharlieAtkinson.github.io/master/images/data_cleaning.png)

## Introduction

This project demonstrates my ability to process natural language data and build advanced deep learning models to solve real-world problems. The goal is to classify whether a tweet is describing a real disaster or not using tweet text, keywords, and location data. It highlights skills in **text preprocessing**, **tokenization**, **embedding layers with GloVe**, **multi-input neural networks**, and **model evaluation**, showcasing my readiness for a graduate role in AI or NLP.

---

## 1. Data Cleaning and Preprocessing

![Data Cleaning Code](https://raw.githubusercontent.com/CharlieAtkinson/CharlieAtkinson.github.io/master/images/data_cleaning.png)

In this section, I clean the tweet text by removing URLs, mentions, hashtags, and special characters. The text is lowercased and stripped of extra spaces. This standardization ensures that tokenization is consistent and the model can learn meaningful patterns from the text.

---

## 2. Keyword and Location Preprocessing

![Keyword/Location Code](https://raw.githubusercontent.com/CharlieAtkinson/CharlieAtkinson.github.io/master/images/keyword_location.png)

Here I handle missing values in the `keyword` and `location` columns. Keywords are tokenized and padded for input into the neural network, while locations are encoded as integer labels. This allows the model to incorporate categorical features alongside the main tweet text.

---

## 3. Tokenization and Embeddings

![Tokenization/Embedding Code](https://raw.githubusercontent.com/CharlieAtkinson/CharlieAtkinson.github.io/master/images/tokenization_embedding.png)

I convert the cleaned tweet text into sequences of integers using a Keras tokenizer, then pad them to a consistent length. Pre-trained **GloVe embeddings** are loaded into an embedding matrix, giving the model rich semantic representations of words.

---

## 4. Model Architecture

![Model Architecture Code](https://raw.githubusercontent.com/CharlieAtkinson/CharlieAtkinson.github.io/master/images/model_architecture.png)

The model is a **multi-input neural network**:
- **Text branch:** Bi-directional LSTM with GloVe embeddings.
- **Keyword branch:** Embedding layer for keywords.
- **Location branch:** Embedding layer for location.
Outputs from all branches are concatenated and passed through dense layers with dropout. This structure allows the model to learn from multiple sources of information simultaneously.

---

## 5. Training

![Training Code](https://raw.githubusercontent.com/CharlieAtkinson/CharlieAtkinson.github.io/master/images/training.png)

The model is trained on a 90/10 train-validation split. **Class weights** handle imbalanced classes, and **EarlyStopping** and **ReduceLROnPlateau** callbacks prevent overfitting and optimize learning. This ensures robust performance on unseen data.

---

## 6. Evaluation

![Evaluation Code](https://raw.githubusercontent.com/CharlieAtkinson/CharlieAtkinson.github.io/master/images/evaluation.png)

I evaluate the model using multiple metrics:
- Accuracy and F1 score to measure general performance.
- ROC AUC and Average Precision for ranking quality.
- Confusion matrix, ROC curve, and precision-recall curve for detailed insights.
I also tune the decision threshold to maximize F1 score, which is crucial for imbalanced datasets.

---

## 7. Test Predictions and Submission

![Submission Code](https://raw.githubusercontent.com/CharlieAtkinson/CharlieAtkinson.github.io/master/images/submission.png)

Finally, predictions are made on the test set and thresholded according to the best F1 score. The results are saved in a submission file, demonstrating the **end-to-end workflow** from raw data to actionable outputs.

---

## Skills Highlighted
- NLP preprocessing and tokenization
- Pre-trained word embeddings (GloVe)
- Multi-input deep learning models (text + categorical features)
- Handling class imbalance with weights
- Model evaluation using advanced metrics and visualization
- End-to-end project execution from raw data to predictions

---

**GitHub Repository:** [Link to your repo]  
**Colab Notebook:** [Link to interactive notebook]
