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
          <select
            value={filter}
            onChange={handleFilterChange}
            className="appearance-none peer p-4 pe-9 block w-full border border-white rounded-lg text-sm bg-darkBrown text-white
              disabled:opacity-50 disabled:pointer-events-none
              focus:pt-6 focus:pb-2 focus:border-blue-500 focus:ring-blue-500
              [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2
              autofill:pt-6 autofill:pb-2 hover:cursor-pointer"
          >
            <option value="all">Vše</option>
            <option value="les">Les</option>
            <option value="park">Park</option>
            <option value="louka">Louka</option>
          </select>
          <label
            className="absolute top-0 start-0 px-3 py-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent text-slate-600
              peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-slate-600
              peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-slate-600"
          >
            Typ Lokace:
          </label>
          <span className="absolute top-6 end-3 hover:cursor-pointer">
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
