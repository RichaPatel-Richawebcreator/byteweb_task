import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBkueFjOQVeblF7vrBAEAxZX1qnaUQHKbc",
    authDomain: "byteweb-ed92f.firebaseapp.com",
    projectId: "byteweb-ed92f",
    storageBucket: "byteweb-ed92f.firebasestorage.app",
    messagingSenderId: "197676327694",
    appId: "1:197676327694:web:10279ca0360b58d7d2ed5f",
    measurementId: "G-17RY1L7PC6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);