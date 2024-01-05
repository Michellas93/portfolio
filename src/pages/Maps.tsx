import { PointType } from "../types";
import { useState } from "react";
import { useFetchQuery } from "../hooks/useFetchQuery";
import { Button } from "../components/Button";
import { Map } from "./Map";
import { Section } from "../components/Section";

export const Maps = () => {
  const { data, isLoading, error } = useFetchQuery<PointType>("point");
  const [location, setLocation] = useState<{
    coordinates: {
      lat: number | null;
      lng: number | null;
    };
    name: string | null;
    zoom: number | null;
  }>({ coordinates: { lat: 50.0755, lng: 14.4378 }, name: "Praha", zoom: 10 });

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

  const handleClick = (point: PointType) => {
    console.log(location);
    console.log(point);
    setLocation({
      coordinates: {
        lat: Number(point.map._lat),
        lng: Number(point.map._long),
      },
      name: point.name,
      zoom: 13,
    });
  };

  return (
    <Section title="Najdi si to na mapě" type="light">
      <div className="flex flex-col items-center">
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-center">
          {data.map((point) => (
            <div className="p-2" key={point.id}>
              <Button
                onClick={() => {
                  handleClick(point);
                }}
              >
                {point.name}
              </Button>
            </div>
          ))}
        </div>
        <div className="flex justify-center pb-20 pt-20">
          <Map location={location} />
        </div>
      </div>
    </Section>
  );
};
