import { auth } from "./firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, updatePassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc } from 'firebase/firestore';

export function doCreateUserWithEmailAndPassword(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
};

export function doSignInWithEmailAndPassword(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    result.user

    return result
};

export const doSignOut = () => {
    return auth.signOut();
};


export const doPasswordReset = (email) => {
    return sendPasswordResetEmail(auth,email);
};

export const doPasswordChange = (password) => {
    return updatePassword(auth.currentUser, password);
};

export const registerUser = async (email, password, role) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Store user role in Firestore firebase for difrenciating difrence between the user and superuser
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        role: role, //(superuser or user) the role defines either of them
      });
  
      console.log('User registered:', user);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };
  