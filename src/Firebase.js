// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRBuHKMFP5im6mb9YGjouKhIosVHz5V7g",
  authDomain: "react-expense-tracker-7acd1.firebaseapp.com",
  projectId: "react-expense-tracker-7acd1",
  storageBucket: "react-expense-tracker-7acd1.appspot.com",
  messagingSenderId: "350672980495",
  appId: "1:350672980495:web:d387544c694a71e307317a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const entriesCollection = collection(db, "entries")