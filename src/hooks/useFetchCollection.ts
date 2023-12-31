import { useEffect, useState } from "react";
import { DocumentData, Query, onSnapshot } from "firebase/firestore";

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

export const useFetchCollection = <T extends object>(query: Query) => {
  const [data, setData] = useState<T[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);

    const userRef = query.withConverter(assignTypes<T>());

    const unsubscribe = onSnapshot(
      userRef,
      (snapshot) => {
        if (snapshot) {
          const result = snapshot.docs.map((item) => {
            return {
              ...item.data(),
              id: item.id,
            };
          });
          setIsLoading(false);
          setData(result);

          setError(null);
        } else {
          setData(null);
          setError("Záznam není ne webové stránce");
          setIsLoading(false);
        }
      },
      (err) => {
        setError(err.message);
        setIsLoading(false);
      }
    );
    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    data,
    isLoading,
    error,
  };
};
