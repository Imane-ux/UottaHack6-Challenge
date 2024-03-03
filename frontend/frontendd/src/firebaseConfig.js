
import { initializeApp } from "firebase/app";


import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDQ4bZTI3DyQVNqovmLY-K3uN0r7NIiUvY",
  authDomain: "nr-squared.firebaseapp.com",
  projectId: "nr-squared",
  storageBucket: "nr-squared.appspot.com",
  messagingSenderId: "679536417915",
  appId: "1:679536417915:web:fedf77df63ed9b9064d6de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const firestore = getFirestore(app); // Use 'getFirestore' to access firestore

export const db= getFirestore(app);