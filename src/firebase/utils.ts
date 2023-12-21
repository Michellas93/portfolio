import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleProvider, storage } from "./config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { toast } from "react-toastify";

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

export const uploadImage = async (image: File, name: string) => {
  try {
    const imageRef = ref(storage, name);
    const snapshot = await uploadBytes(imageRef, image);
    try {
      const url = await getDownloadURL(snapshot.ref);
      return url;
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
      return null;
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      toast.error(error.message);
    }
    return null;
  }
};
