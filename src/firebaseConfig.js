import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_5OZBobb8IKZCn_9SDI8HmgFoCCdzsgE",
  authDomain: "yakeen-institute.firebaseapp.com",
  projectId: "yakeen-institute",
  storageBucket: "yakeen-institute.appspot.com",
  messagingSenderId: "289065704733",
  appId: "1:289065704733:web:59e6f51f25f63346d5d5f4",
  measurementId: "G-JMWC4LJZRY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
export const db = getFirestore(app);
