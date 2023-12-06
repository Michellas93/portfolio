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
    return <div>Chyba: {error}</div>;
  }
  if (!data) {
    return <div>nemám data</div>;
  }

  return data.map((location) => {
    return (
      <ListItem
        key={location.id}
        point={{
          id: 0,
          name: "",
        }}
      />
    );
  });
};

export const List = () => {
  return (
    <Section title="Seznam" type="light">
      <ListContent />
    </Section>
  );
};
