import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC4xv9HIwMpywJNlMIou-PJnSiF6KrqL-I",
  authDomain: "international-transport-rental.firebaseapp.com",
  projectId: "international-transport-rental",
  storageBucket: "international-transport-rental.appspot.com",
  messagingSenderId: "752085424336",
  appId: "1:752085424336:web:fb52d21f75d41b6f81e6d5",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
