import { useEffect, useState } from "react";
import { WhereFilterOp, onSnapshot, query, where } from "firebase/firestore";
import { assignTypes } from "./assignTypes";
import { getCollection } from "../firebase/config";

export type FilterItemType = {
  key: string;
  operator: WhereFilterOp;
  value: string;
};

const getQuery = (collectionName: string, filter?: FilterItemType) => {
  return !filter || filter?.value === "all"
    ? query(getCollection(collectionName))
    : query(
        getCollection(collectionName),
        where(filter.key, filter.operator, filter.value)
      );
};

export const useFetchQuery = <T extends object>(
  collectionName: string,
  filter?: FilterItemType
) => {
  const [data, setData] = useState<Array<T> | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const queryRef = getQuery(collectionName, filter).withConverter(
    assignTypes<T>()
  );

  useEffect(() => {
    setIsLoading(true);
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
  }, [filter]);

  return {
    data,
    isLoading,
    error,
  };
};
