import { getCollection } from "../../firebase/config";
import { useFetchCollection } from "../../hooks/useFetchCollection";
import { PointType } from "../../types";
import { ListItem } from "./ListItem";

export const List = () => {
  const { data, isLoading, error } = useFetchCollection<PointType>(
    getCollection("point")
  );
  // TODO: Pridat filtery
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
