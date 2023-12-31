import { getCollection } from "../../firebase/config";
import { useFetchQuery } from "../../hooks/useFetchQuery";
import { PointType } from "../../types";
import { ListItem } from "./ListItem";

export const List = () => {
  const res = useFetchQuery<PointType>(getCollection("point"));
  const { data, isLoading, error } = res;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div> {error}</div>;
  }

  if (!data || data.length === 0) {
    return (
      <div>
        Momentálně zde není žádné místo k venčení. Pokud jste admin, prosím
        nejdříve místo přidejte.
      </div>
    );
  }

  return (
    <>
      {data.map((point) => (
        <ListItem {...point} key={point.id} />
      ))}
    </>
  );
};
