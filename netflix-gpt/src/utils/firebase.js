// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB20sGAELJz0lYW-pW-Dzsg4O78HWeXFBE",
  authDomain: "netflixgpt-934e4.firebaseapp.com",
  projectId: "netflixgpt-934e4",
  storageBucket: "netflixgpt-934e4.appspot.com",
  messagingSenderId: "839043598992",
  appId: "1:839043598992:web:819f5215135bdcfcb62615",
  measurementId: "G-P7BP7FJKJQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();