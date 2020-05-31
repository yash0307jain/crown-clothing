import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD4PdVdEvqfpO_9wbWYdPnYqgZormzyik4",
  authDomain: "yj-crown-clothing-db.firebaseapp.com",
  databaseURL: "https://yj-crown-clothing-db.firebaseio.com",
  projectId: "yj-crown-clothing-db",
  storageBucket: "yj-crown-clothing-db.appspot.com",
  messagingSenderId: "939768128292",
  appId: "1:939768128292:web:ee5976c6b4af9d9f3a09b1",
  measurementId: "G-1YENJ2Y2EQ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;