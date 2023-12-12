import { ListItem } from "../components/ListItem";
import { Section } from "../components/Section";
import { useFetchCollection } from "../hooks/useFetchCollection";
import { PointType } from "../types";

const ListContent = () => {
  const { data, isLoading, error } = useFetchCollection<PointType>("point");
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div> {error}</div>;
  }
  if (!data) {
    return <div>Omlouváme se, ale požadovaný obsah není k dispozici.</div>;
  }

  return (
    <>
      {data.map((point) => (
        <ListItem point={point} key={point.id} />
      ))}
    </>
  );
};

export const List = () => {
  return (
    <Section title="Seznam" type="light">
      <ListContent />
    </Section>
  );
};
