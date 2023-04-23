// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlvYNBO96yy7wCe8h882DPJ2GFM1bNAHs",
  authDomain: "react-dashboard-auth.firebaseapp.com",
  projectId: "react-dashboard-auth",
  storageBucket: "react-dashboard-auth.appspot.com",
  messagingSenderId: "23284959892",
  appId: "1:23284959892:web:36a761b2322c9d4f0dc281",
  measurementId: "G-EW3PBFM3YQ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
