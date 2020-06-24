import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyC2P0cq2XWCYVQ73ZUjx01sWMI9U_Q5oL4",
  authDomain: "wily-db.firebaseapp.com",
  databaseURL: "https://wily-db.firebaseio.com",
  projectId: "wily-db",
  storageBucket: "wily-db.appspot.com",
  messagingSenderId: "721419063239",
  appId: "1:721419063239:web:c67063d116d7e9bdb993e2"
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();