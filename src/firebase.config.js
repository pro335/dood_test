import firebase from "firebase/compat/app";
import 'firebase/firestore'

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH8wVJK7yK2tlPEdAFcNK0414XHilUNjM",
  authDomain: "doodtest.firebaseapp.com",
  projectId: "doodtest",
  storageBucket: "doodtest.appspot.com",
  messagingSenderId: "416031143187",
  appId: "1:416031143187:web:82bafd0fc9c5843c5416e6"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
export const db = firebaseApp.firestore()
