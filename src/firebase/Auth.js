import { auth, db } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

// register a user with a specified role
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

// login a user and check their role
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const role = await getUserRole(userCredential.user.uid);

    if (role === 'superuser') {
      // Redirect to superuser dashboard or perform superuser-specific actions
      console.log('Redirecting to superuser dashboard...');
    } else {
      // Redirect to user dashboard or perform user-specific actions
      console.log('Redirecting to user dashboard...');
    }
  } catch (error) {
    console.error('Error logging in:', error);
  }
};

// role of a user
export const getUserRole = async (uid) => {
  const userDoc = await getDoc(doc(db, 'users', uid));
  if (userDoc.exists()) {
    return userDoc.data().role;
  } else {
    console.log('No such user!');
    return null;
  }
};

// check access based on user role
export const checkAccess = async () => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const role = await getUserRole(user.uid);
      if (role === 'superuser') {
        // gives access to superuser features
        console.log('Superuser access granted.');
      } else {
        // gives access to regular user features
        console.log('User access granted.');
      }
    } else {
      console.log('No user is signed in.');
    }
  });
};

export default auth;  