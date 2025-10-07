---
title: "Disaster Tweet Classification Project"
excerpt: "A deep learning NLP Kaggle.com project classifying tweets as real disasters or not. <br/><img src='/images/data_cleaning.png' width='500'/>"
collection: portfolio
date: 2025-10-07
---

# Disaster Tweet Classification Project

## Charlie Atkinson

![KagglePage](https://raw.githubusercontent.com/CharlieAtkinson/CharlieAtkinson.github.io/master/images/KagglePage.png)

## Introduction

For this project, I worked with a Kaggle dataset of disaster tweets to build a model that can predict whether a tweet is about a real disaster or not. The dataset includes tweet text, keywords, and location information, which I used to give the model as much context as possible.

The main goal was to practice NLP and deep learning skills by taking raw text data and turning it into predictions. Along the way, I focused on cleaning the text, tokenizing it, using pre-trained GloVe embeddings, and building a multi-input neural network that could learn from text, keywords, and location together.

I chose this project because it’s a realistic problem that organizations like news agencies or disaster relief teams might actually want to solve. It also gave me a chance to experiment with challenges like imbalanced data, threshold tuning, and combining multiple types of inputs.

---

## 1. Data Cleaning and Preprocessing

![Data Cleaning Code](https://raw.githubusercontent.com/CharlieAtkinson/CharlieAtkinson.github.io/master/images/data_cleaning.png)

The first step was to clean the tweet text. I removed URLs, mentions, hashtags, and special characters, and converted everything to lowercase. This makes the text consistent, which is important for the tokenizer and helps the model learn patterns more effectively.

---

## 2. Keyword and Location Preprocessing

![Keyword/Location Code](https://raw.githubusercontent.com/CharlieAtkinson/CharlieAtkinson.github.io/master/images/keyword_location.png)

Some tweets didn’t have keywords or locations, so I replaced missing values with placeholders. Keywords were tokenised and padded so the model could understand them as numbers, while locations were integer encoded.

---

## 3. Tokenization and Embeddings

![Tokenization/Embedding Code](https://raw.githubusercontent.com/CharlieAtkinson/CharlieAtkinson.github.io/master/images/tokenization_embedding.png)

Next, I turned all the cleaned tweet text into sequences of integers using Keras’s tokeniser. Sequences were padded so every input had the same length. I also loaded pre-trained GloVe embeddings into an embedding matrix to give the model rich word representations, which helps it understand semantic relationships between words without having to learn everything from scratch.

---

## 4. Model Architecture

![Model Architecture Code](https://raw.githubusercontent.com/CharlieAtkinson/CharlieAtkinson.github.io/master/images/model_architecture.png)

The model is a multi-input neural network. The main text is processed through a bidirectional LSTM with GloVe embeddings. Keywords and location are processed separately using embedding layers. The outputs from all branches are concatenated and passed through dense layers with dropout to produce a single probability prediction, allowing the model to learn from text and categorical features together.

---

## 5. Training

![Training Code](https://raw.githubusercontent.com/CharlieAtkinson/CharlieAtkinson.github.io/master/images/training.png)

I trained the model on a 90/10 train-validation split. Class weights were used to balance the impact of underrepresented disaster tweets. I also included EarlyStopping and ReduceLROnPlateau callbacks to prevent overfitting and adjust the learning rate automatically, which helps the model converge efficiently.

---

## 6. Evaluation

![Evaluation Code](https://raw.githubusercontent.com/CharlieAtkinson/CharlieAtkinson.github.io/master/images/evaluation.png)

The model achieved an overall accuracy of 81.9% and an F1 score of 0.787, showing that it performs well at distinguishing between disaster and non-disaster tweets. The ROC AUC of 0.870 and Average Precision of 0.871 indicate strong ranking performance, meaning the model assigns higher probabilities to true disaster tweets more often than not.

Looking at per-class metrics, the model predicts non-disaster tweets (class 0) with slightly higher precision (0.82) and recall (0.87) compared to disaster tweets (class 1), which have a precision of 0.82 and recall of 0.76. This is expected, since non-disaster tweets are slightly more frequent in the dataset. Overall, the balanced performance across both classes demonstrates that the model can effectively handle the imbalance in the data while still capturing meaningful patterns in tweet text, keywords, and location information.

---

## 7. Test Predictions and Submission

![Submission Code](https://raw.githubusercontent.com/CharlieAtkinson/CharlieAtkinson.github.io/master/images/submission.png)

Finally, I predicted on the test set using the best threshold and saved the results as a submission file. This completes the end-to-end workflow from raw data to actionable predictions. When I uploaded my submission to Kaggle.com, I achieved a score of 0.80140.

---

## Skills Highlighted
- NLP preprocessing and tokenisation
- Pre-trained word embeddings (GloVe)
- Multi-input deep learning models (text + categorical features)
- Handling class imbalance with weights
- Model evaluation using advanced metrics and visualisation
- End-to-end project execution from raw data to predictions

---

**GitHub Repository:** [Link to your repo]  
**Colab Notebook:** [Link to interactive notebook]
