// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB4ex9hky0TgLYF5Ea4sVGW7dFiVt0pZ0",
  authDomain: "chat-3ccc2.firebaseapp.com",
  projectId: "chat-3ccc2",
  storageBucket: "chat-3ccc2.appspot.com",
  messagingSenderId: "39531097720",
  appId: "1:39531097720:web:a497d1e1c1fab4f0fa078d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);