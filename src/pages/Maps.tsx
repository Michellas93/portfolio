import { PointType } from "../types";
import { useFetchQuery } from "../hooks/useFetchQuery";
import { Map } from "../components/Map";
import { Section } from "../components/Section";
import { useListFilter } from "../hooks/useListFilter";

export const Maps = () => {
  const [filter, FilterComponent] = useListFilter();

  const { data, isLoading, error } = useFetchQuery<PointType>("point", filter);

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
    <div className="min-h-screen bg-whiteT">
      <Section title="Mapa" type="light">
        <div className="mx-auto mb-4 relative w-40 flex flex-row justify-center items-center">
          <FilterComponent isLoading={isLoading} />
        </div>
        <div className="flex justify-center pb-20">
          <Map data={data} />
        </div>
      </Section>
    </div>
  );
};
