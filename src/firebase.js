// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_apiKey}`,
  authDomain: `${import.meta.env.VITE_authDomain}`,
  projectId: `${import.meta.env.VITE_projectId}`,
  storageBucket: `${import.meta.env.VITE_storageBucket}`,
  messagingSenderId: `${import.meta.env.VITE_messagingSenderId}`,
  appId: `${import.meta.env.VITE_appId}`,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const registerWithEmailAndPassword = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

const registerWithGmail = async () => {
  // Gmail registration logic will go here
  try {
    const response = await signInWithPopup(auth, googleProvider);
    return response.user;
  } catch (error) {
    throw new Error(error);
  }
};

const loginWithEmailAndPassword = async (email, password) => {
  try {
    // Login logic will go here
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response.user;
  } catch (error) {
    throw new Error(error);
  }
};

const loginWithGmail = async () => {
  try {
    const response = await signInWithPopup(auth, googleProvider);
    return response.user;
  } catch (error) {
    throw new Error(error);
  }
};

export {
  registerWithEmailAndPassword,
  registerWithGmail,
  loginWithEmailAndPassword,
  loginWithGmail,
};
