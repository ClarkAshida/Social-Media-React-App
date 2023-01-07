// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA8OchZQzWL3e4aFl9lxfOlJCLAIBPTEQ",
  authDomain: "social-media-app-832ed.firebaseapp.com",
  projectId: "social-media-app-832ed",
  storageBucket: "social-media-app-832ed.appspot.com",
  messagingSenderId: "55393598826",
  appId: "1:55393598826:web:c188253c242881469ef913"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)