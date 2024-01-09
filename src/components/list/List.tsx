import { useFetchQuery } from "../../hooks/useFetchQuery";
import { PointType } from "../../types";
import { ListItem } from "./ListItem";
import { useListFilter } from "../../hooks/useListFilter";
import { DropdownIcon } from "../DropdownIcon";
import { Spinner } from "@material-tailwind/react";

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
        <div className="relative w-40">
          <span className="absolute top-12 right-14 end-3 hover:cursor-pointer">
            <DropdownIcon />
            {isLoading && <Spinner />}
          </span>
        </div>
        <FilterComponent />
        <div className="flex flex-row flex-wrap m-2 justify-center">
          {data.map((point) => (
            <div className="p-2" key={point.id}>
              <div className="transition-transform duration-300 hover:scale-110  ">
                <ListItem {...point} key={point.id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
