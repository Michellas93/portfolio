import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";
import { PointType } from "../types";
import { useSearchParams } from "react-router-dom";
import { ROUTES } from "../routes";
import { LikeButton } from "./LikeButton";
import { ButtonLink } from "./ButtonLink";
import { useEffect, useState } from "react";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

const containerStyle = {
  width: "1000px",
  height: "650px",
};

type MapProps = {
  data: PointType[];
};

const transformGeolocationToPosition = (
  geolocation: PointType["geolocation"]
) => ({
  lat: geolocation.latitude,
  lng: geolocation.longitude,
});

export const Map = ({ data }: MapProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeMarkerId = searchParams.get("activeMarkerId");

  const handleActiveMarker = (id: string) => {
    if (id === activeMarkerId) {
      return;
    }
    setSearchParams({ activeMarkerId: id });
  };
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const handleOnLoad = (currentMap: google.maps.Map) => {
    // const bounds = new google.maps.LatLngBounds();
    // data.forEach(({ geolocation }) =>
    //   bounds.extend(transformGeolocationToPosition(geolocation))
    // );
    // map.fitBounds(bounds);
    setMap(currentMap);
  };
  useEffect(() => {
    if (map) {
      const bounds = new google.maps.LatLngBounds();
      data.forEach(({ geolocation }) =>
        bounds.extend(transformGeolocationToPosition(geolocation))
      );
      map.fitBounds(bounds);
    }
  }, [map, data]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return <p>Načítání...</p>;
  }
  if (!data) {
    return <p>Chyba při načítání dat.</p>;
  }

  return (
    <GoogleMap
      onUnmount={() => setMap(null)}
      onLoad={handleOnLoad}
      mapContainerStyle={containerStyle}
      onClick={() => setSearchParams()}
    >
      {data.map(({ id, geolocation, name, description, likes }) => {
        const position = transformGeolocationToPosition(geolocation);
        return (
          <MarkerF
            key={id}
            position={position}
            onClick={() => {
              handleActiveMarker(id);
            }}
          >
            {activeMarkerId === id ? (
              <InfoWindowF
                onCloseClick={() => setSearchParams()}
                position={position}
              >
                <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
                  <div className="flex justify-center gap-3 items-center mb-2">
                    <h3 className="font-bold text-xl">{name}</h3>

                    <LikeButton
                      likes={likes}
                      docId={id}
                      collectionName="point"
                      inactiveHeartColor="black"
                    />
                  </div>
                  <p className="text-gray-700 text-sm line-clamp-3">
                    {description}
                  </p>
                  <ButtonLink
                    link={ROUTES.point(`${id}?map=true`)}
                    variant="secondary"
                    className="mt-2"
                  >
                    Více
                  </ButtonLink>
                </div>
              </InfoWindowF>
            ) : null}
          </MarkerF>
        );
      })}
    </GoogleMap>
  );
};
