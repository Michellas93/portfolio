import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { DocumentData, collection, onSnapshot } from "firebase/firestore";

const assignTypes = <T extends object>() => {
  return {
    toFirestore(doc: T): DocumentData {
      return doc;
    },
    fromFirestore(snapshot: DocumentData): T {
      return snapshot.data()! as T;
    },
  };
};

export const useFetchData = <T extends object>(collectionName: string) => {
  const [data, setData] = useState<T[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    const userRef = collection(db, collectionName).withConverter(
      assignTypes<T>()
    );
    const unsubscribe = onSnapshot(
      userRef,
      (snapshot) => {
        if (snapshot) {
          const result = snapshot.docs.map((item) => {
            return item.data();
          });
          setIsLoading(false);
          setData(result);

          setError(null);
        } else {
          setData(null);
          setError("Žádná nová kniha k vypsání");
          setIsLoading(false);
        }
      },
      (err) => {
        setError(err.message);
      }
    );
    return () => {
      unsubscribe();
    };
  }, [collectionName]);
  return {
    data,
    isLoading,
    error,
  };
};
