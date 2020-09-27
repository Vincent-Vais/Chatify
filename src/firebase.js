import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBkVQL-JAzsKsaVq-RoOjUMGAAru92E4B8",
  authDomain: "facebook-messanger-clone-120ce.firebaseapp.com",
  databaseURL: "https://facebook-messanger-clone-120ce.firebaseio.com",
  projectId: "facebook-messanger-clone-120ce",
  storageBucket: "facebook-messanger-clone-120ce.appspot.com",
  messagingSenderId: "389336299225",
  appId: "1:389336299225:web:8ea985e2455110c9f370c8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db, firebase };
