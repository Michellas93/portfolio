import { Section } from "../components/Section";
import { useFetchData } from "../hooks/useFetchData";

export const ListContent = () => {
  const { data, isLoading, error } = useFetchData("Locations");
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
      <div key={location.id} className="flex flex-col text-center">
        <div>{location.name} </div>
        <div> {location.region}</div>
        <div>{location.distance}</div>
        <div> {location.types}</div>
        <div> {location.freeRange}</div>
        <div> {location.description} </div>
        <div> {location.likes}</div>
      </div>
    );

    //az budu na strance ne useFetchData ale docs
    // obrayek mista -> firebaseStorage
  });
};

export const List = () => {
  return (
    <Section title="Seznam" type="light">
      <ListContent />
    </Section>
  );
};
