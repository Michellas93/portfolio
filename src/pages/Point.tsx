import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCollectionItem } from "../firebase/config";

export const Point = () => {
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const getData = async () => {
      if (id) {
        const snap = await getCollectionItem("point", id);
      }
    };
    getData();
  }, []);

  return <div>{id}</div>;
};
