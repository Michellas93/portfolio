import { useEffect, useState } from "react";
import { Query, onSnapshot } from "firebase/firestore";
import { assignTypes } from "./assignTypes";

export const useFetchQuery = <T extends object>(query: Query) => {
  const [data, setData] = useState<Array<T> | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    const queryRef = query.withConverter(assignTypes<T>());
    const unsubscribe = onSnapshot(
      queryRef,
      (querySnapshot) => {
        if (!querySnapshot.empty) {
          const result = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setData(result);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    isLoading,
    error,
  };
};
