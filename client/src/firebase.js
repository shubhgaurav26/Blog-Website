// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-aceca.firebaseapp.com",
  projectId: "mern-blog-aceca",
  storageBucket: "mern-blog-aceca.appspot.com",
  messagingSenderId: "818387469746",
  appId: "1:818387469746:web:63d9f08e4941311bd250ab"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

