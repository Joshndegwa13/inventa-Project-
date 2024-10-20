import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyABA_P5Zm4_I0tNHbTMY9dD0aF6eTpKN2w",
  authDomain: "inventa-5b47e.firebaseapp.com",
  projectId: "inventa-5b47e",
  storageBucket: "inventa-5b47e.appspot.com",
  messagingSenderId: "52727963003",
  appId: "1:52727963003:web:823026dca402b01645f1de"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app);
const database = getDatabase(app);

export { storage, auth, database };