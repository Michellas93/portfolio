import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDSjTeLT4bgPtIvKlCwYBHXvoqGoGkoqcc",
	authDomain: "pet-heart-83dfb.firebaseapp.com",
	projectId: "pet-heart-83dfb",
	storageBucket: "pet-heart-83dfb.appspot.com",
	messagingSenderId: "251420634498",
	appId: "1:251420634498:web:5830668f0b9adbede8b39b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
