import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDXqGoiLbOALNnGjFUv64-Z2BfJDiWGdRE",
  authDomain: "inventa-c085d.firebaseapp.com",
  projectId: "inventa-c085d",
  storageBucket: "inventa-c085d.appspot.com",
  messagingSenderId: "392189773777",
  appId: "1:392189773777:web:dddf4cda908d72efd082f0"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
const storage = getStorage(app);
const auth = getAuth(app);
const database = getDatabase(app);

export { storage, auth, database };


