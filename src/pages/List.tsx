import { ListItem } from "../components/ListItem";
import { Section } from "../components/Section";
import { useFetchData } from "../hooks/useFetchData";
import { LocationType } from "../types";

const ListContent = () => {
  const { data, isLoading, error } = useFetchData<LocationType>("Locations");
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
    return <ListItem location={location} key={location.id} />;
  });
};

export const List = () => {
  return (
    <Section title="Seznam" type="light">
      <ListContent />
    </Section>
  );
};
