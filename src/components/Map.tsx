import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { LocationMarker } from "../types";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

const centerLocation = {
  lat: 50.0755,
  lng: 14.4378,
};

const containerStyle = {
  width: "1000px",
  height: "400px",
};

type MapProps = {
  locationMarkers: LocationMarker[];
};

export const Map = ({ locationMarkers }: MapProps) => {
  const navigate = useNavigate();

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  if (isLoaded && locationMarkers.length > 0) {
    return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={centerLocation}
        zoom={10}
      >
        {locationMarkers.map((locationMarker) => (
          <Marker
            key={locationMarker.id}
            position={locationMarker.coordinates}
            label={locationMarker.name}
            title={locationMarker.name}
            onClick={() => {
              navigate(ROUTES.point(locationMarker.id));
            }}
          />
        ))}
      </GoogleMap>
    );
  }

  return <p>Nedošlo ke správnému načtení Google Maps.</p>;
};
