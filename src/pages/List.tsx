import { ListItem } from "../components/ListItem";
import { Section } from "../components/Section";
import { useFetchCollection } from "../hooks/useFetchCollection";
import { PointType } from "../types";

const ListContent = () => {
  const { data, isLoading, error } = useFetchCollection<PointType>("point");
  // TODO: Pridat filtery
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
    <Section title="Pejskem Doporučeno" type="light">
      <div className="flex flex-row flex-wrap justify-center ">
        <ListContent />
      </div>
      <div className="h-[20vh] bg-whiteT"></div>
    </Section>
  );
};
