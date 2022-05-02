// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsxKQYVe1UBR53cVZZFUE9kpF9oNQyE7o",
  authDomain: "reviews-a46f6.firebaseapp.com",
  projectId: "reviews-a46f6",
  storageBucket: "reviews-a46f6.appspot.com",
  messagingSenderId: "317128124911",
  appId: "1:317128124911:web:cfa3e27027061f4b3bae1a"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;