import { getAuth, GoogleAuthProvider } from "firebase/auth";
import firebase from "firebase/compat/app";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
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

export const getDocumentReference = (collectionName: string, id: string) =>
  doc(db, collectionName, id);

export const getCollection = (collectionName: string) =>
  collection(db, collectionName);
