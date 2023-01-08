import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase } from "firebase/database";
// import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDf20n2Gr78J7hfRGUGvg4mrThCSlTHvXQ",
  authDomain: "fir-app-a50ac.firebaseapp.com",
  projectId: "fir-app-a50ac",
  storageBucket: "fir-app-a50ac.appspot.com",
  messagingSenderId: "545559366299",
  appId: "1:545559366299:web:77f7426e91b27f460f543e",
  measurementId: "G-C857DLQRRJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export {
  auth,
  database,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
export default app;
