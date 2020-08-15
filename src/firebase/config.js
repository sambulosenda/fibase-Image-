
 import * as firebase from 'firebase/app';
 import 'firebase/storage';
 import 'firebase/firestore'; 

 var firebaseConfig = {
    apiKey: "AIzaSyC_M0cC61qIjzDYZka5qzcwH54azOONDdE",
    authDomain: "instaphoto-fac3f.firebaseapp.com",
    databaseURL: "https://instaphoto-fac3f.firebaseio.com",
    projectId: "instaphoto-fac3f",
    storageBucket: "instaphoto-fac3f.appspot.com",
    messagingSenderId: "425735101033",
    appId: "1:425735101033:web:bd6398ae045285206aa0f8",
    measurementId: "G-6D0NXFR129"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;


  export { projectFirestore, projectStorage,  timestamp} ;