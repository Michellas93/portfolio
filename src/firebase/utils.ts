import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "./config";

type UserInputsType = {
  email: string;
  password: string;
};

// Login function
export const loginWithEmailPassword = async (
  { email, password }: UserInputsType,
  successCallback?: () => void
) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    successCallback?.();
  } catch (error) {
    console.error(error);
  }
};

// Logout function
export const logOut = async (successCallback?: () => void) => {
  try {
    await signOut(auth);
    successCallback?.();
  } catch (error) {
    console.error(error);
  }
};

// Sing Up function
export const signUpWithEmailPassword = async ({
  email,
  password,
}: UserInputsType) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
  }
};

// 3rd party providers functions
export const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (error) {
    console.error(error);
  }
};
