---
title: "Disaster Tweet Classification Project"
excerpt: "A deep learning NLP Kaggle.com project classifying tweets as real disasters or not. <br/><img src='/images/Portfolio3Images/KagglePage.png' width='500'/>"
collection: portfolio
date: 2025-10-07
---

# Disaster Tweet Classification Project

## Charlie Atkinson

![KagglePage](https://raw.githubusercontent.com/CharlieAtkinson/CharlieAtkinson.github.io/master/images/Portfolio3Images/KagglePage.png)

## Introduction

For this project, I worked with a Kaggle dataset of disaster tweets to build a model that can predict whether a tweet is about a real disaster or not. The dataset includes tweet text, keywords, and location information, which I used to give the model as much context as possible.

The main goal was to practice NLP and deep learning skills by taking raw text data and turning it into predictions. Along the way, I focused on cleaning the text, tokenising it, using pre-trained GloVe embeddings, and building a multi-input neural network that could learn from text, keywords, and location together.

I chose this project because it’s a realistic problem that organisations like news agencies or disaster relief teams might actually want to solve. It also gave me a chance to experiment with challenges like imbalanced data, threshold tuning, and combining multiple types of inputs.

---

## 1. Data Cleaning and Preprocessing

![Imports Code](https://raw.githubusercontent.com/CharlieAtkinson/CharlieAtkinson.github.io/master/images/Portfolio3Images/ImportsCode.png)
![Cleaning Data Code](https://raw.githubusercontent.com/CharlieAtkinson/CharlieAtkinson.github.io/master/images/Portfolio3Images/CleaningDataCode.png)

The first step was to clean the tweet text. I removed URLs, mentions, hashtags, and special characters, and converted everything to lowercase. This makes the text consistent, which is important for the tokeniser and helps the model learn patterns more effectively.

---

## 2. Keyword and Location Preprocessing

![Preprocessing Code](https://raw.githubusercontent.com/CharlieAtkinson/CharlieAtkinson.github.io/master/images/Portfolio3Images/PreprocessingCode.png)

Some tweets didn’t have keywords or locations, so I replaced missing values with placeholders. Keywords were tokenised and padded so the model could understand them as numbers, while locations were integer encoded.

---

## 3. Tokenisation and Embeddings

![Tokeniser Code](https://raw.githubusercontent.com/CharlieAtkinson/CharlieAtkinson.github.io/master/images/Portfolio3Images/TokeniserCode.png)
![GloVe Code](https://raw.githubusercontent.com/CharlieAtkinson/CharlieAtkinson.github.io/master/images/Portfolio3Images/GloVeCode.png)

Next, I turned all the cleaned tweet text into sequences of integers using Keras’s tokeniser. Sequences were padded so every input had the same length. I also loaded pre-trained GloVe embeddings into an embedding matrix to give the model rich word representations, which helps it understand semantic relationships between words without having to learn everything from scratch.

---

## 4. Model Architecture

![Model Architecture Code](https://raw.githubusercontent.com/CharlieAtkinson/CharlieAtkinson.github.io/master/images/Portfolio3Images/ModelArchitectureCode.png)
![Model Architecture Output](https://raw.githubusercontent.com/CharlieAtkinson/CharlieAtkinson.github.io/master/images/Portfolio3Images/ModelArchitectureOutput.png)

The model is a multi-input neural network. The main text is processed through a bidirectional LSTM with GloVe embeddings. Keywords and location are processed separately using embedding layers. The outputs from all branches are concatenated and passed through dense layers with dropout to produce a single probability prediction, allowing the model to learn from text and categorical features together.

---

## 5. Training

![Model Training](https://raw.githubusercontent.com/CharlieAtkinson/CharlieAtkinson.github.io/master/images/Portfolio3Images/ModelTraining.png)

I trained the model on a 90/10 train-validation split. Class weights were used to balance the impact of underrepresented disaster tweets. I also included EarlyStopping and ReduceLROnPlateau callbacks to prevent overfitting and adjust the learning rate automatically, which helps the model converge efficiently.

---

## 6. Selecting the Best Threshold

Before making final predictions, I tuned the decision threshold to maximise the F1 score because the dataset is slightly imbalanced. I predicted probabilities on the validation set and tested thresholds from 0.1 to 0.9. For each threshold, I calculated the F1 score and chose the one that gave the highest score.  

![Prediction Code](https://raw.githubusercontent.com/CharlieAtkinson/CharlieAtkinson.github.io/master/images/Portfolio3Images/PredictionCode.png)
![PredictionOutput.png](https://raw.githubusercontent.com/CharlieAtkinson/CharlieAtkinson.github.io/master/images/Portfolio3Images/PredictionOutput.png)

This approach ensures the model balances precision and recall effectively, improving detection of disaster-related tweets without producing too many false positives.

---

## 7. Evaluation

After selecting the best threshold, I evaluated the model using multiple metrics to understand its performance.  

![Evaluation Code](https://raw.githubusercontent.com/CharlieAtkinson/CharlieAtkinson.github.io/master/images/Portfolio3Images/EvaluationCode.png)
![ROC Curve](https://raw.githubusercontent.com/CharlieAtkinson/CharlieAtkinson.github.io/master/images/Portfolio3Images/RocCurve.png)
![PR Curve](https://raw.githubusercontent.com/CharlieAtkinson/CharlieAtkinson.github.io/master/images/Portfolio3Images/PrCurve.png)

The model achieved an overall **accuracy of 81.9%** and an **F1 score of 0.787**, showing strong performance in distinguishing disaster from non-disaster tweets. The **ROC AUC of 0.870** and **Average Precision of 0.871** indicate that the model ranks disaster tweets effectively.  

Per-class metrics show that non-disaster tweets (class 0) have slightly higher precision and recall than disaster tweets (class 1), which is expected given the class distribution.

---

## 8. Test Predictions and Submission

Finally, I used the model to predict the test set using the best threshold. These predictions were saved in a submission file and submitted to Kaggle.
![Output Code](https://raw.githubusercontent.com/CharlieAtkinson/CharlieAtkinson.github.io/master/images/Portfolio3Images/OutputCode.png)

When submitted to Kaggle, the model achieved a score of **0.80140**, demonstrating that it generalises well to unseen data.


## Skills Highlighted
- NLP preprocessing and tokenisation
- Pre-trained word embeddings (GloVe)
- Multi-input deep learning models (text + categorical features)
- Handling class imbalance with weights
- Model evaluation using advanced metrics and visualisation
- End-to-end project execution from raw data to predictions

---

## Next Steps / Possible Improvements

The model works pretty well, but there are a few things I could try to make it even better. Using more advanced embeddings like BERT or RoBERTa might help the model to more deeply understand the tweets. I could also experiment with different neural network setups, like adding attention layers or trying transformer-based models. Getting more labelled data, or augmenting the dataset, would probably help too, particularly for the less common disaster tweets. Finally, playing around with hyperparameters or combining multiple models could push the accuracy and F1 score a bit higher.
