import { getAuth, GoogleAuthProvider } from "firebase/auth";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDSjTeLT4bgPtIvKlCwYBHXvoqGoGkoqcc",
  authDomain: "pet-heart-83dfb.firebaseapp.com",
  projectId: "pet-heart-83dfb",
  storageBucket: "pet-heart-83dfb.appspot.com",
  messagingSenderId: "251420634498",
  appId: "1:251420634498:web:5830668f0b9adbede8b39b",
};

const app = firebase.initializeApp(firebaseConfig);
const storage = getStorage();
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

export const getPathReference = (reference: string) => ref(storage, reference);
