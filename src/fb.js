import firebase from 'firebase/app'
import 'firebase/firestore'

  var config = {
    apiKey: "AIzaSyBiWFnQCwgXAbo8qwPTscJZ0x1RiiUnhTc",
    authDomain: "ninja-vutify.firebaseapp.com",
    databaseURL: "https://ninja-vutify.firebaseio.com",
    projectId: "ninja-vutify",
    storageBucket: "ninja-vutify.appspot.com",
    messagingSenderId: "231478967944"
  };
  firebase.initializeApp(config);

  const db = firebase.firestore();

  db.settings({timestampsInSnapshots: true });

  export default db;
