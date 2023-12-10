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
    return <div>Stránka nenalezena: {error}</div>;
  }
  if (!data) {
    return <div>Tato stránka neobsahuje tento druh dat</div>;
  }

  return data.map((point) => {
    return <ListItem point={point} key={point.id} />;
  });
};

export const List = () => {
  return (
    <Section title="Seznam" type="light">
      <ListContent />
    </Section>
  );
};
