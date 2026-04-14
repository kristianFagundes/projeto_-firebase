
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBZhJce5lXQ-5-nLdeEfKre4HRFFeSB0Xk",
  authDomain: "meu-primeiro-firebase-c8c22.firebaseapp.com",
  projectId: "meu-primeiro-firebase-c8c22",
  storageBucket: "meu-primeiro-firebase-c8c22.firebasestorage.app",
  messagingSenderId: "569097579497",
  appId: "1:569097579497:web:74e2d005911b9249f63978",
  measurementId: "G-YR9QNVSB5E"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
