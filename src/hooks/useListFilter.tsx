import { FormEvent, useCallback, useMemo, useState } from "react";
import { DropdownIcon } from "../components/DropdownIcon";
import { FilterItemType } from "./useFetchQuery";
import { Spinner } from "@material-tailwind/react";

type UseListFilterType = () => [
  FilterItemType,
  ({ isLoading }: { isLoading?: boolean }) => JSX.Element
];

export const useListFilter: UseListFilterType = () => {
  const [filter, setFilter] = useState("all");
  const filterItem: FilterItemType = useMemo(
    () => ({
      operator: "==",
      value: filter,
      key: "type",
    }),
    [filter]
  );
  const component = useCallback(
    ({ isLoading }: { isLoading?: boolean }) => (
      <div>
        <label className="block text-sm font-medium mb-2 text-slate-600">
          Typ Lokace:
        </label>
        <select
          disabled={isLoading}
          value={filter}
          onChange={handleFilterChange}
          className="appearance-none py-3 px-4 pe-9 block w-full border border-white cursor-pointer rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-darkBrown text-white"
        >
          <option value="all">Vše</option>
          <option value="les">Les</option>
          <option value="park">Park</option>
          <option value="louka">Louka</option>
        </select>
        <span className="absolute top-12 right-14 end-3 hover:cursor-pointer">
          <DropdownIcon />
          {isLoading && <Spinner />}
        </span>
      </div>
    ),
    [filter]
  );

  const handleFilterChange = (e: FormEvent<HTMLSelectElement>) => {
    setFilter(e.currentTarget.value);
  };
  return [filterItem, component];
};
