// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBETC4SadVi3X-oszszl5UBoSZfiIQ0M2o",
    authDomain: "react-auth-66413.firebaseapp.com",
    projectId: "react-auth-66413",
    storageBucket: "react-auth-66413.appspot.com",
    messagingSenderId: "535500763263",
    appId: "1:535500763263:web:edc73dc8381423cae64f4a"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);