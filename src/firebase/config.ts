import { getAuth, GoogleAuthProvider } from "firebase/auth";
import firebase from "firebase/compat/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDSjTeLT4bgPtIvKlCwYBHXvoqGoGkoqcc",
  authDomain: "pet-heart-83dfb.firebaseapp.com",
  databaseURL:
    "https://pet-heart-83dfb-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "pet-heart-83dfb",
  storageBucket: "pet-heart-83dfb.appspot.com",
  messagingSenderId: "251420634498",
  appId: "1:251420634498:web:5830668f0b9adbede8b39b",
};

const app = firebase.initializeApp(firebaseConfig);
export const storage = getStorage();
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

export const database = getDatabase(app);

export const getPathReference = (reference: string) => ref(storage, reference);
export const getCollectionItem = async (collectionName: string, id: string) =>
  await getDoc(doc(db, collectionName, id));
