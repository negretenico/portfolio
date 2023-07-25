import React, { useState } from 'react';
import {
  MDBIcon,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import ThumbNail from '../../components/ThumbNail';

export default function MyWork (): JSX.Element {
  const [iconsActive, setIconsActive] = useState('tab1');
  const fullStackThumbNails = [
    {
      image: 'clean_plate_club.PNG',
      title: 'Clean Plate Club',
      description: '"The Clean Plate Club" is an innovative and user-friendly application designed to assist individuals in mastering the art of meal prepping. In today\'s fast-paced world, finding time to cook healthy and balanced meals daily can be challenging. That\'s where "The Clean Plate Club" comes to the rescue, providing a seamless solution for planning, organizing, and executing meal prepping with utmost efficiency.'
    }
  ];
  // TODO: put descriptions into their own file OR put this all into one big JSON
  const mlFullStackThumbNails = [
    {
      image: 'sarcasm.jpg',
      title: 'Sarcasm Detection',
      description: 'I began by collecting a substantial amount of Reddit comments along with their corresponding sarcasm labels. To prepare the data for modeling, I performed preprocessing tasks, including removing special characters, converting text to lowercase, and tokenizing the commentsI trained three different machine learning models: Naive Bayes, Perceptron Learning Rule, and Logistic Regression. Each model was trained on the preprocessed data, using the BoW or TF-IDF representations. To assess the performance of the models, I employed standard evaluation metrics like accuracy, precision, recall, and F1-score. To ensure robustness, I used cross-validation during evaluation. In an effort to enhance the prediction performance, I developed an ensemble model called the Voting Classifier. It combined the predictions from Naive Bayes, Perceptron, and Logistic Regression models using majority voting.Upon evaluating the Voting Classifier, I found that it outperformed individual models or at least demonstrated comparable performance. If needed, I performed hyperparameter tuning to optimize each models performance using grid search or random search techniques.'
    },
    {
      image: 'pokemon.jpg',
      title: 'Pokemon Classification',
      description: `
      'In this project, I conducted Pokémon classification, with the objective of predicting their typing based on their base stats. The dataset contained information on various Pokémon, including their base HP, attack, defense, special attack, special defense, and speed.

      I began by collecting the dataset, ensuring it contained Pokémon details along with their corresponding typings, such as water, fire, grass, etc., based on their base stats.
      
      For data preprocessing, I performed necessary tasks to ensure clean data for modeling. This involved handling any missing values and standardizing the features to improve model performance.
      
      I extracted relevant features from the dataset, focusing on base stats like HP, attack, defense, special attack, special defense, and speed.
      
      Next, I trained three different machine learning models using the preprocessed data:
      
      Random Forest: An ensemble learning method that combines multiple decision trees to improve predictive accuracy.
      
      K-Nearest Neighbors (KNN): A non-parametric algorithm that classifies data points based on the majority class of their k-nearest neighbors.
      
      Decision Trees: A tree-based model that partitions the data based on feature thresholds to make predictions.
      
      For model evaluation, I used various metrics like accuracy, precision, recall, F1-score, and confusion matrix. Additionally, I performed cross-validation to assess model robustness and generalization.
      
      To further improve prediction accuracy, I implemented a Voting Classifier. This ensemble model combined the predictions of the Random Forest, KNN, and Decision Trees models using majority voting.
      
      I evaluated the performance of the Voting Classifier and compared it with the individual models' results. This analysis allowed me to determine the ensemble model's ability to leverage the strengths of the base models and potentially improve classification accuracy.
      `
    },
    {
      image: 'song.png',
      title: 'Song Generation',
      description: `
      For our project on song generation, we aimed to create models that could generate songs using data from several different artist libraries. We gathered a diverse dataset containing lyrics and musical compositions from various artists. To prepare the data for modeling, we performed data preprocessing, including tokenization of lyrics and musical notes.

We built two models:

Recurrent Neural Network (RNN):

The RNN model was designed to learn the sequential patterns in the lyrics and music data. We utilized LSTM (Long Short-Term Memory) or GRU (Gated Recurrent Unit) to capture long-term dependencies in the sequences.
Hidden Markov Model (HMM):

The HMM model was used to model the probabilistic transitions between musical notes or lyrics. We employed the Viterbi algorithm for decoding the most probable sequence of states.
After training the models, we evaluated their performance using appropriate metrics. The assessment involved considering factors such as coherence, creativity, and similarity to the original artists' style for the generated songs.

Upon comparing the results of the RNN and HMM models, we found that the HMM model outperformed the RNN in certain aspects, particularly in maintaining musical structure and coherence.

During the project, we encountered challenges in model training and song generation. We addressed these challenges and explored potential improvements for the RNN model, such as adjusting hyperparameters, increasing training data, or experimenting with different architectures.

In our showcase, we presented song samples generated by both the RNN and HMM models, highlighting the creative potential of the models in producing new musical compositions inspired by the input data.

Looking forward, we discussed future possibilities for enhancing song generation, including exploring more advanced deep learning architectures or combining RNN and HMM approaches for improved results.`
    },
    {
      image: 'lol.jpg',
      title: 'League of Legends Champion Recognition',
      description: `
      For our project, the goal was to develop an image classifier using a Convolutional Neural Network (CNN) to accurately classify League of Legends champions based on their images. To obtain the necessary data for training, we utilized Selenium, a web scraping tool, to collect images of League of Legends champions from relevant sources.

Data Collection:
We used Selenium to scrape images of League of Legends champions from various websites and game resources. This ensured that our dataset was diverse and comprehensive, featuring champions in different in-game scenarios, angles, and poses.

Data Preprocessing:
To prepare the images for training, we performed data preprocessing. We resized and standardized the images to a consistent format, making it easier for the CNN model to process them efficiently. Additionally, we normalized the pixel values to enhance model performance and convergence.

Model Architecture:
For the CNN model, we designed a custom architecture specifically tailored to the image classification task. The architecture included convolutional layers to extract meaningful features from the images, pooling layers to downsample the feature maps, and fully connected layers for classification based on the extracted features.

Model Training:
To train the CNN model, we divided the dataset into training, validation, and testing sets. Data augmentation techniques, such as rotation and flipping, were applied to augment the training dataset, improving the model's generalization ability. We used an appropriate optimization algorithm, such as SGD (Stochastic Gradient Descent) or Adam, to minimize the classification loss during training.

Model Evaluation:
We evaluated the CNN model's performance using standard metrics like accuracy, precision, recall, and F1-score on the testing set. Error analysis was conducted to identify misclassifications and potential areas for improvement.

Prediction and Inference:
After training, we deployed the CNN model to make predictions on new, unseen images of League of Legends champions. The model was capable of accurately classifying champions into their respective classes, representing the diverse roster of the game.

Showcase and Demonstration:
The effectiveness of the CNN image classifier was demonstrated by showcasing accurate predictions on sample images of champions. The model's ability to correctly recognize and classify champions based on their unique visual attributes was highlighted.`
    },
    {
      image: 'room.jpg',
      title: 'Room Recognition',
      description: `
      Overview:
The room recognition project aims to develop an intelligent system that can recognize and classify different types of rooms based on images or sensor data. The goal is to create a robust and accurate room recognition model capable of identifying various room categories in real-world environments.

Data Collection:
For this project, data collection is crucial to build a diverse and representative dataset. The data could include images captured from various rooms, such as bedrooms, kitchens, living rooms, bathrooms, and more. Additionally, sensor data from different rooms might be gathered to complement the image dataset and improve the model's generalization.

Data Preprocessing:
Data preprocessing plays a crucial role in preparing the dataset for training. This step involves cleaning and transforming the raw data into a suitable format for the room recognition model. Image data may undergo resizing, normalization, and augmentation, while sensor data might require noise reduction and feature extraction.

Model Architecture Selection:
The choice of the model architecture is critical for achieving accurate room recognition. Convolutional Neural Networks (CNNs) are commonly used for image-based classification tasks, while other machine learning algorithms, such as Support Vector Machines (SVMs) or Decision Trees, might be employed for sensor data-based recognition. Selecting the appropriate model architecture depends on the nature of the data and the desired level of accuracy.

Model Training:
Once the model architecture is chosen, the next step involves training the room recognition model. The dataset is split into training and validation sets, and the model is trained on the training data using an appropriate optimization algorithm. During training, hyperparameter tuning and regularization techniques may be applied to achieve optimal performance and prevent overfitting.

Model Evaluation:
After the model is trained, it is evaluated on a separate test dataset to assess its performance. Evaluation metrics such as accuracy, precision, recall, F1-score, and confusion matrix are used to measure the model's effectiveness in recognizing different room categories. If the model's performance is not satisfactory, further iterations of training and fine-tuning might be necessary.

Deployment and Real-World Testing:
Once the model shows promising results during evaluation, it can be deployed in real-world settings for room recognition tasks. The model can be integrated into a mobile app, smart home system, or any other relevant platform to make real-time predictions on new room data.

Ongoing Improvements and Refinements:
As the project is still in progress, ongoing improvements and refinements are expected. These may include collecting additional data, exploring advanced model architectures, experimenting with transfer learning, and optimizing the model for specific use cases or environments.
      `
    }
  ];

  const handleIconsClick = (value: string): void => {
    if (value === iconsActive) {
      return;
    }

    setIconsActive(value);
  };

  return (
    <>
      <MDBTabs className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => { handleIconsClick('tab1'); }} active={iconsActive === 'tab1'}>
            <MDBIcon fas icon="graduation-cap" /> Machine Learning
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => { handleIconsClick('tab2'); }} active={iconsActive === 'tab2'}>
            <MDBIcon fas icon="desktop" /> Full Stack
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => { handleIconsClick('tab3'); }} active={iconsActive === 'tab3'}>
            <MDBIcon fab icon="gitkraken" /> Code Samples
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={iconsActive === 'tab1'}>
          {
            mlFullStackThumbNails.map(thumbNail => {
              return (
                <>
                  <ThumbNail key={thumbNail.title} {...thumbNail} />
                </>
              );
            })
          }
        </MDBTabsPane>
        <MDBTabsPane show={iconsActive === 'tab2'}>
          <MDBRow>
            {
              fullStackThumbNails.map(thumbNail => {
                return (
                  <>
                    <MDBCol md="1">
                      <ThumbNail key={thumbNail.title} {...thumbNail} />
                    </MDBCol>
                  </>
                );
              })
            }
          </MDBRow>
        </MDBTabsPane>
        <MDBTabsPane show={iconsActive === 'tab3'}>Tab 3 content</MDBTabsPane>
      </MDBTabsContent>
    </>
  );
}
