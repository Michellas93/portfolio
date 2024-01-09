import { useFetchQuery } from "../../hooks/useFetchQuery";
import { PointType } from "../../types";
import { ListItem } from "./ListItem";
import { useListFilter } from "../../hooks/useListFilter";

export const List = () => {
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
    <>
      <div className="flex flex-col items-center">
        <div className="mx-auto mb-4 relative w-40 flex flex-row justify-center items-center">
          <FilterComponent isLoading={isLoading} />
        </div>
        <div className="flex flex-row flex-wrap m-2 justify-center">
          {data.map((point) => (
            <div className="p-2" key={point.id}>
              <div className="transition-transform duration-300 hover:scale-110 group">
                <ListItem {...point} key={point.id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
