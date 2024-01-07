import { SetStateAction, useMemo, useState } from "react";
import { FilterItemType, useFetchQuery } from "../../hooks/useFetchQuery";
import { PointType } from "../../types";
import { ListItem } from "./ListItem";
import { DropdownIcon } from "../DropdownIcon";

export const List = () => {
  const [filter, setFilter] = useState("all");
  const filterItem: FilterItemType = useMemo(
    () => ({
      operator: "==",
      value: filter,
      key: "type",
    }),
    [filter]
  );

  const { data, isLoading, error } = useFetchQuery<PointType>(
    "point",
    filterItem
  );

  const handleFilterChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setFilter(e.target.value);
  };

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
          <label className="block text-sm font-medium mb-2 text-slate-600">
            Typ Lokace:
          </label>
          <select
            value={filter}
            onChange={handleFilterChange}
            className="appearance-none py-3 px-4 pe-9 block w-full border border-white cursor-pointer rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-darkBrown text-white"
          >
            <option value="all">Vše</option>
            <option value="les">Les</option>
            <option value="park">Park</option>
            <option value="louka">Louka</option>
          </select>
          <span className="absolute top-12 end-3 hover:cursor-pointer">
            <DropdownIcon />
          </span>
        </div>
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
