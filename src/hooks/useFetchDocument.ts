import { useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";
import { getDocumentReference } from "../firebase/config";
import { assignTypes } from "./assignTypes";

export const useFetchDocument = <T extends object>(
  collectionName: string,
  docId: string
) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    const docRef = getDocumentReference(collectionName, docId).withConverter(
      assignTypes<T>()
    );
    const unsubscribe = onSnapshot(
      docRef,
      (doc) => {
        if (doc.exists()) {
          setData(doc.data());
          setIsLoading(false);
        } else {
          setData(null);
          setError("Záznam není ne webové stránce");
          setIsLoading(false);
        }
      },
      (err) => {
        setData(null);
        setError(err.message);
        setIsLoading(false);
      }
    );
    return () => {
      unsubscribe();
    };
  }, [collectionName, docId]);

  return {
    data,
    isLoading,
    error,
  };
};
