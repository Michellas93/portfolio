import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { DocumentData, collection, onSnapshot } from "firebase/firestore";

export const useFetchData = (collectionName: string) => {
  const [data, setData] = useState<DocumentData[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    // najit ve firebase document
    const userRef = collection(db, collectionName);
    const unsubscribe = onSnapshot(
      userRef,
      (snapshot) => {
        if (snapshot) {
          const result: DocumentData[] = [];
          snapshot.docs.forEach((item: DocumentData) => {
            result.push({ id: item.id, ...item.data() });
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
  }, []);
  return {
    data,
    isLoading,
    error,
  };
};
