// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth" ;
const firebaseConfig = {
  apiKey: "AIzaSyCOmdX5G57NQJ4ce2d-EZwvWPzhIWtF2Pg",
  authDomain: "react-netflix-clone-25764.firebaseapp.com",
  projectId: "react-netflix-clone-25764",
  storageBucket: "react-netflix-clone-25764.appspot.com",
  messagingSenderId: "57163157058",
  appId: "1:57163157058:web:098a2c44b4c697574767db",
  measurementId: "G-J0PRQQ1PKT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);