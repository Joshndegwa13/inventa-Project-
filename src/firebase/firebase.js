// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXqGoiLbOALNnGjFUv64-Z2BfJDiWGdRE",
  authDomain: "inventa-c085d.firebaseapp.com",
  projectId: "inventa-c085d",
  storageBucket: "inventa-c085d.appspot.com",
  messagingSenderId: "392189773777",
  appId: "1:392189773777:web:dddf4cda908d72efd082f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };