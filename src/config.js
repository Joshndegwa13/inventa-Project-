import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBsGaIHQL2mma2Ea54hzymDMaUwd7lsZiY",
    authDomain: "pet-pal-34749.firebaseapp.com",
    projectId: "pet-pal-34749",
    storageBucket: "pet-pal-34749.appspot.com",
    messagingSenderId: "194631603766",
    appId: "1:194631603766:web:ab38afbcfcf484a21e6a97"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
