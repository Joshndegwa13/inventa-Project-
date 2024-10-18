import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  



const firebaseConfig = {
  apiKey: "AIzaSyDXqGoiLbOALNnGjFUv64-Z2BfJDiWGdRE",
  authDomain: "inventa-c085d.firebaseapp.com",
  projectId: "inventa-c085d",
  storageBucket: "inventa-c085d.appspot.com",
  messagingSenderId: "392189773777",
  appId: "1:392189773777:web:dddf4cda908d72efd082f0"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };