import { type CodeSnippet } from '../components/CodeSnippets';

export const codeSnippets: CodeSnippet[] = [
  {
    title: 'Anime Classification',
    text: `
    import pandas as pd
  import numpy as np
  import os
  import matplotlib.pyplot as plt
  from sklearn.cluster import KMeans
  from copy import deepcopy
  from sklearn.feature_extraction.text import TfidfVectorizer
  from sklearn.preprocessing import LabelEncoder
  """
  file used to perform clustering
  """
  
  
  class model:
      def __init__(self, K):
          self.filename = os.getcwd()+"\\Data\\merged.csv"
          self.db = pd.read_csv(self.filename)
          self.le = LabelEncoder()
          self.vectorizer = TfidfVectorizer(stop_words ="english")
          names =  self.le.fit_transform(self.db["Names"])
  
          genres = self.le.fit_transform(self.db["Genre"])
          studios =   self.le.fit_transform(self.db["Studios"])
          self.X = np.array(list(zip( names, genres,studios,self.db["rate"],
                            self.db["Episodes"])))
          self.numCent = K
          
      def scatter_data(self,x,y):
          C = self.create_cent()
          Cx,Cy = zip(*C)
          plt.scatter(self.db[x],self.db[y], c ='b', s = 18)
          plt.scatter(Cx,Cy ,marker ="+", c ='r', s =160)
          plt.xlabel(x)
          plt.ylabel(y)
          plt.show()
  
  
      def predict(self,toPredict):
          kMeans = KMeans(n_clusters = self.numCent)
          kMeans = kMeans.fit(self.X)
          toPredict = self.le.fit_transform(toPredict)
          prediction = kMeans.predict([toPredict])
          val = self.db[kMeans.labels_ == prediction][:5]
          return val
  
      def eculid_dist(self, a, b, ax=1):
          return np.linalg.norm(a-b,axis = ax)
  
      def do_Scki(self):
          kMeans = KMeans(n_clusters = self.numCent)
          kMeans = kMeans.fit(self.X)
          cent = kMeans.cluster_centers_
          c = ['b','y','r','g','c','m']
          labels = kMeans.predict(self.X)
          color = [c[i] for i in labels]
          plt.scatter(self.db["Episodes"],self.db["rate"], c = color, s= 18)
          plt.scatter(cent[:,0], cent[:,1], marker = "+", s =100, c = 'black')
          plt.show()
  
      def do_KMeans_Clusetring(self):
          C = self.create_cent()
          C_prev = np.zeros(C.shape)
          clust = np.zeros(len(self.X))
          dist = self.eculid_dist(C,C_prev)
          while dist.any() != 0:
              for i in range(len(self.X)):
                  dist = self.eculid_dist(self.X[i],C)
                  cluster = np.argmin(dist)
                  clust[i]= cluster
              C_prev = deepcopy(C)
  
              for i in range(self.numCent):
                  points = [self.X[j] for j in range(len(self.X)) if clust[j]==i]
                  if len(points) != 0:
                      C[i] = np.mean(points, axis = 0)
              dist = self.eculid_dist(C,C_prev)
          colors = ['b','y','r','g','c','m']
  
          for i in range(self.numCent):
              points = np.array([self.X[j] for j in range(len(self.X)) if clust[j] == i])
              if len(points) >0:
                  plt.scatter(points[:,0], points[:,1], s = 10, c = colors[i])
              else:
                  print("Please regen centroids again")
              plt.scatter(points[:, 0], points[:, 1],s = 10, c = colors[i])
              plt.scatter(C[:,0], C[:,1], marker="+", c='r', s=160)
          plt.show()
  
      def create_cent(self):
          Cx = np.random.randint(np.min(self.X[:,0]),np.max(self.X[:,0]), size = self.numCent)
          Cy = np.random.randint(np.min(self.X[:,1]),np.max(self.X[:,1]), size = self.numCent)
          C = np.array(list(zip(Cx,Cy)), dtype =np.float64)
          return C
    `
  },
  {
    title: 'Pokemon Classifier',
    text: `
    import sklearn
  from sklearn.utils import shuffle
  from sklearn import svm, neighbors
  from sklearn.neighbors import KNeighborsClassifier
  from sklearn.tree import DecisionTreeClassifier
  from sklearn.ensemble import VotingClassifier, RandomForestClassifier
  import pandas as pd
  from sklearn import metrics
  import sys
  import pickle
  import numpy as np
  from collections import Counter
  from sklearn import linear_model, preprocessing
  import warnings
  warnings.simplefilter(action='ignore', category=FutureWarning)
  # warnings.simplefilter(action = 'ignore', category = ConvergenceWarning)
  
  data = pd.read_csv("pokemon.csv")
  
  types = []
  for type in data['type1']:
      if type not in types:
          types.append(type)
  le = preprocessing.LabelEncoder()
  predict = ['type1']
  dataToInclude = ["base_total","capture_rate","defense","experience_growth","height_m","hp","sp_attack","sp_defense","speed","weight_kg"]
  features = data.drop(columns = [c for c in data.columns if c not in dataToInclude])
  for feature in features:
      features[feature] = le.fit_transform(features[feature])
  label = le.fit_transform(data['type1'].values)
  X = features.values
  y = list(label)
  best= 0
  print("X ",len(X)," y ",len(y))
  for i in range(0,100):
      x_train, x_test, y_train, y_test = sklearn.model_selection.train_test_split(X, y, test_size=0.1)
  
      model = VotingClassifier(
          [('rfor', RandomForestClassifier()), ('knn', neighbors.KNeighborsClassifier()), ('tree', DecisionTreeClassifier())])
  
      model.fit(x_train, y_train)
      acc = model.score(x_test, y_test)
      if best< acc:
          best= acc
          with open("bestModel.pickle", "wb") as f:
              pickle.dump(model,f)
  
  pin=open("bestModel.pickle","rb")
  mod = pickle.load(pin)
  prediction = mod.predict(x_test)
  
  acc = mod.score(x_test,y_test)
  print(acc)
  print("Data Spread", Counter(data["type1"]))
  print("Prediction Spred: ", Counter(prediction))
  print()
  numIncorrect = 0
  for x in range(len(prediction)):
      if(types[prediction[x]] ==types[y_test[x]] ):
          print("We Predicted ", types[prediction[x]], " We Got ", types[y_test[x]])
      else:
          numIncorrect = numIncorrect +1
          print("WE WERE INCORRECT, THAT IS OUR ",numIncorrect, " Failure")
    `
  },
  {
    title: 'Image Webscrapper',
    text: `
    from urllib.request import urlopen as uReq
  from bs4 import BeautifulSoup as soup
  """IF what we are looking for is not necessarily in a tag that means it is text so do .text"""
  #opening up connection to the website
  names = set()
  namesAndSkinCount = {}
  
  # all skin names with prices
  namesWithPrice = {}
  uClient = uReq("https://u.gg/lol/champions/")
  # read the page
  page_html = uClient.read()
  uClient.close()
  # paerse the webpage
  page_soup = soup(page_html, "html.parser")
  namesOfChampions = page_soup.findAll("div", {"class": "champion-name"})
  for s in namesOfChampions:
      names.add(s.text)
  for item in names:
      namesAndSkinCount[item] = 0
      # filename
  filename = "skins.csv"
  # opens filename in writing mode
  f = open(filename, "w")
  # headers
  headers = "SKIN NAME, SKIN PRICE \n"
  # writes the headers
  f.write(headers)
  for i in range(1,29):
      uClient = uReq("https://www.mobafire.com/league-of-legends/skins?page="+str(i))
      # read the page
      page_html = uClient.read()
      uClient.close()
      # paerse the webpage
      page_soup = soup(page_html, "html.parser")
      # so this is the actual container that holds each skin of the website
      skins = page_soup.findAll("a", {"class": "champ-skins__item"})
      # number of skins within the page
      skinNum = len(skins)
      # this has all of the actual prices
      skinsWithPrice = page_soup.findAll("div", {"class": "champ-skins__item__cost"})
      # loops over all the skins and prints their prices
      # only if applicable not all skins have prices ie base skins or prestige
      # all skin names
      name = []
      for skin in skins:
          name.append(skin.div.h3.text)
      for skin in skinsWithPrice:
          # we do skin.findParent because the actual tags we have only give us the price and the parent of the price
          # would give us the name
          namesWithPrice[skin.findParent().div.h3.text] = skin.text
      for index in range(skinNum):
          if name[index] in namesWithPrice:
              f.write(name[index] +
  
                      ',' + namesWithPrice.get(name[index]) + '\n')
          else:
              string = F"{name[index]}, NO PRICE \n"
              f.write(string)
      for string in name:
          string = string.split(' ')
          for items in string:
              if (items in namesAndSkinCount ):
                  namesAndSkinCount[items] +=1
              elif(items == 'Twisted'):
                  namesAndSkinCount['Twisted Fate'] +=1
              elif(items == 'Lee'):
                  namesAndSkinCount['Lee Sin'] +=1
              elif(items == 'Master'):
                  namesAndSkinCount['Master Yi'] +=1
              elif(items == 'Jarvan'):
                  namesAndSkinCount['Jarvan IV'] += 1
              elif(items =='Miss'):
                  namesAndSkinCount['Miss Fortune'] += 1
              elif(items == 'Nunu'):
                  namesAndSkinCount['Nunu & Willump'] += 1
              elif(items =='Xin'):
                  namesAndSkinCount['Xin Zhao'] += 1
              elif(items == 'Aurelion'):
                  namesAndSkinCount['Aurelion Sol'] += 1
              elif(items == 'Mundo'):
                  namesAndSkinCount['Dr. Mundo'] += 1
              elif(items == 'Kench'):
                  namesAndSkinCount['Tahm Kench'] += 1
    `
  },
  {
    title: 'OS Organization',
    text: `
    import os
  from pathlib import Path
  
  DIRECTORIES = {
      "HTML": [".html5", ".html", ".htm", ".xhtml"],
      "IMAGES": [".jpeg", ".jpg", ".tiff", ".gif", ".bmp", ".png", ".bpg", "svg",
                 ".heif", ".psd"],
      "VIDEOS": [".avi", ".flv", ".wmv", ".mov", ".mp4", ".webm", ".vob", ".mng",
                 ".qt", ".mpg", ".mpeg", ".3gp"],
      "DOCUMENTS": [".oxps", ".epub", ".pages", ".docx", ".doc", ".fdf", ".ods",
                    ".odt", ".pwi", ".xsn", ".xps", ".dotx", ".docm", ".dox",
                    ".rvg", ".rtf", ".rtfd", ".wpd", ".xls", ".xlsx", ".ppt",
                    "pptx"],
      "ARCHIVES": [".a", ".ar", ".cpio", ".iso", ".tar", ".gz", ".rz", ".7z",
                   ".dmg", ".rar", ".xar", ".zip"],
      "AUDIO": [".aac", ".aa", ".aac", ".dvf", ".m4a", ".m4b", ".m4p", ".mp3",
                ".msv", "ogg", "oga", ".raw", ".vox", ".wav", ".wma"],
      "PLAINTEXT": [".txt", ".in", ".out"],
      "PDF": [".pdf"],
      "PYTHON": [".py"],
      "XML": [".xml"],
      "EXE": [".exe"],
      "SHELL": [".sh"]
  
  }
  
  FILE_FORMATS = {file_format: directory
                  for directory, file_formats in DIRECTORIES.items()
                  for file_format in file_formats}
  
  
  def organize_junk():
      for entry in os.scandir():
          if entry.is_dir():
              continue
          file_path = Path(entry)
          file_format = file_path.suffix.lower()
          if file_format in FILE_FORMATS:
              directory_path = Path(FILE_FORMATS[file_format])
              directory_path.mkdir(exist_ok=True)
              file_path.rename(directory_path.joinpath(file_path))
  
          for dir in os.scandir():
              try:
                  os.rmdir(dir)
              except:
                  pass
  
  
  if __name__ == "__main__":
      organize_junk() 
    `
  },
  {
    title: 'Song Generation Models',
    text: `
    import tensorflow as tf
  from tensorflow.keras.models import load_model
  import torch
  import markovify
  import os
  import numpy as np
  import random as rd
  
  """
  Goal:
      Create 2-3 models that each will generate their own song
      1. Make a HMM that will genearate based off of ALL data 
      2. Make a neural net with torch and tensorflow
      3. Some other type of generative model? maybe something obscure? 
  """
  
  
  class HMM():
      def __init__(self, data, name_of_artist):
          self.model = None
          for file in os.listdir(data):
              if file == name_of_artist.lower() + ".txt":
                  with open(os.path.join(data, file), encoding="utf8") as f:
                      non_combined_model = markovify.Text(f, retain_original=False)
                      if self.model:
                          self.model = markovify.combine(models=[self.model, non_combined_model])
                      else:
                          self.model = non_combined_model
          self.model.compile(inplace=False)
  
      def generate_song(self):
          NUM_SENTENCES: int = 30
          song = ""
          for i in range(NUM_SENTENCES):
              song = song + self.model.make_sentence() + "\n"
          return song
  
  class HMM_Markovify:
      def __init__(self, desired_artist, keywords):
          file = os.getcwd() + f"\\Data\\{desired_artist}.txt"
          with open(file, encoding="utf8") as f:
              model = markovify.Text(f, retain_original=False)
  
          self.model = model
          self.model.compile(inplace=False)
          self.keywords = keywords
  
      def generate_song(self):
          # Set persistence value; affects how many times the model will try to generate a sentence with a keyword in it
          keyword_persistence = 1000
          # 5 sentences per provided keyword
          song = ""
          for keyword in self.keywords:
              keyword_included = False
              for i in range(5):
                  # 5(?) sentences per provided keyword
                  sentence = self.model.make_sentence()
                  if keyword in sentence:
                      keyword_included = True
                  else:
                      if keyword_included is False:
                          if i == 4:
                              # Last possible block that could execute; ensure keyword is in the sentence here
                              # "Reasonable force"; keyword_persistence
                              keyword_tries = 0
                              while keyword not in sentence and keyword_tries < keyword_persistence:
                                  sentence = self.model.make_sentence()
                                  keyword_tries += 1
                              keyword_included = True
                          else:
                              # Keyword not included up to this point, but we still have more iterations to go
                              # So, generate random number rdv between 0 and 1;
                              # if rdv >= 0.8, force the keyword; else, accept the sentence and move on
                              rdv = rd.uniform(0, 1)
                              if rdv >= 0.8:
                                  keyword_tries = 0
                                  while keyword not in sentence and keyword_tries < keyword_persistence:
                                      sentence = self.model.make_sentence()
                                      keyword_tries += 1
                                  keyword_included = True
                  # Append the sentence to the song
                  song = song + sentence + "\n"
  
          return song
  
  
  class RNN_TensorFlow():
      def __init__(self, vocab_size, embedding_dim, rnn_units, batch_size, raw_data):
          self.vocab_size = vocab_size
          self.embedding_dim = embedding_dim
          self.BUFFER_SIZE = 10000
          self.BATCH_SIZE = 1
  
          self.rnn_units = rnn_units
          self.batch_size = batch_size
          self.seq_length = 100
          self.vocab = sorted(set(raw_data))
          self.char2idx = {u: i for i, u in enumerate(self.vocab)}
          self.idx2char = np.array(self.vocab)
          self.text_as_int = np.array([self.char2idx[c] for c in raw_data])
          self.char_dataset = tf.data.Dataset.from_tensor_slices(self.text_as_int)
  
          self.sequences = self.char_dataset.batch(self.seq_lenth+1, drop_remainder=True)
          self.dataset = self.sequences.map(self.split_input_target)
          self.dataset = self.dataset.shuffle(self.BUFFER_SIZE).batch(self.BATCH_SIZE, drop_remainder=True)
  
      def split_input_target(self, chunk):
          input_text = chunk[:-1]
          target_text = chunk[1:]
          return input_text, target_text
  
      def loss(self, labels, logits):
          return tf.keras.losses.sparse_categorical_crossentropy(labels, logits, from_logits=True)
  
      def build_model(self):
          model = tf.keras.Sequential([
              tf.keras.layers.Embedding(self.vocab_size, self.embedding_dim,
                                        batch_input_shape=[self.batch_size, None]),
              tf.keras.layers.GRU(self.rnn_units,
                                  return_sequences=True,
                                  stateful=True,
                                  recurrent_initializer='glorot_uniform'),
              tf.keras.layers.Dense(self.vocab_size)
          ])
          model.compile(optimizer='adam', loss=self.loss)
          return model
  
      def load_model(self, model, name_of_artist):
          model.load_weights(os.getcwd()+"\\Data\\"+name_of_artist.lower()+".txt")
          model.build(tf.TensorShape([1, None]))
          return model
  
      def generate_song(self, model, start_string):
          num_generate = 1000
          start_string = start_string.lower()
  
          # Converting our start string to numbers (vectorizing)
          input_eval = [self.char2idx[s] for s in start_string]
          input_eval = tf.expand_dims(input_eval, 0)
          # Empty string to store our results
          text_generated = []
  
          # Here batch size == 1
          model.reset_states()
          for i in range(num_generate):
              predictions = model(input_eval)
              # remove the batch dimension
              predictions = tf.squeeze(predictions, 0)
              predicted_id = tf.random.categorical(predictions, num_samples=1)[-1, 0].numpy()
              input_eval = tf.expand_dims([predicted_id], 0)
  
              text_generated.append(self.idx2char[predicted_id])
  
          return start_string + ''.join(text_generated)
  
      def format_song(self, song):
          song = song.split(" ")
          print(len(song))
          n = 7
          ret = ''
          for i in range(0, len(song), n):
              ret += ' '.join(song[i:i + n]) + '\n'
  
          return ret
    `
  }
].map(text => { return { language: 'python', ...text }; });
