import { PointType } from "../types";
import { useFetchQuery } from "../hooks/useFetchQuery";
import { Map } from "../components/Map";
import { Section } from "../components/Section";

export const Maps = () => {
  const { data, isLoading, error } = useFetchQuery<PointType>("point");

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
    <Section title="Mapa" type="light">
      <div className="flex justify-center pb-10">
        <Map data={data} />
      </div>
    </Section>
  );
};
