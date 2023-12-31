import { SetStateAction, useState } from "react";
import { getCollection } from "../../firebase/config";
import { useFetchCollection } from "../../hooks/useFetchCollection";
import { PointType } from "../../types";
import { ListItem } from "./ListItem";
import { query, where } from "firebase/firestore";

// type Props = {
//   typeOptions: SelectOption[];
// };

export const List = () => {
  // const {
  //   register,
  //   formState: { errors },
  // } = useForm<PointNewFormSchemaType>({
  //   resolver: zodResolver(PointNewFormSchema),
  // });

  const { data, isLoading, error } = useFetchCollection<PointType>(
    query(getCollection("point"), where("type", "in", ["louka", "les", "park"]))
  );
  const [filter, setFilter] = useState("all");
  const filteredData = data?.filter((point) => {
    if (filter === "all") return true;

    return point.type === filter;
  });
  const handleFilterChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setFilter(e.target.value);
  };
  // TODO: Pridat filtery
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
      <div className="flex flex-col items-center  ">
        <select
          value={filter}
          onChange={handleFilterChange}
          className="w-1/3 mt-1 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-white shadow-md"
        >
          <option value="all">Vše</option>
          <option value="les">Les</option>
          <option value="park">Park</option>
          <option value="louka">Louka</option>
        </select>
        <div className="flex flex-row flex-wrap m-2  justify-center ">
          {filteredData.map((point) => (
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
