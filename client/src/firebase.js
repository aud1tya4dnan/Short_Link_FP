// Import the functions you need from the SDKs you need
import { firestore } from "firebase-admin";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { authentication } from 'firebase/auth';
import { db } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlrXLHO4N6iwQnftLRDq52zSzmUwU43Lc",
  authDomain: "expressjs-fp.firebaseapp.com",
  projectId: "expressjs-fp",
  storageBucket: "expressjs-fp.appspot.com",
  messagingSenderId: "35720847152",
  appId: "1:35720847152:web:f030a0e97b6aef23f332f5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
