import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

initializeApp({
  apiKey: "AIzaSyBu3xGqeJg6oEHGA4lR31_zxmAU3zoDq_I",
  authDomain: "fb-crud-react-ebade.firebaseapp.com",
  projectId: "fb-crud-react-ebade",
  storageBucket: "fb-crud-react-ebade.appspot.com",
  messagingSenderId: "787137330021",
  appId: "1:787137330021:web:79edcca0389003ac893f8c"
});

export const db = getFirestore();
