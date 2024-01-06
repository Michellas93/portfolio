import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { LocationMarker } from "../types";

const GOOGLE_MAPS_API_KEY = "AIzaSyDqsR-Bwo5PJnwk3Yfj4qy3jEt_hRpS5ac";

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
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  console.log(locationMarkers[0]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={centerLocation}
      zoom={10}
    >
      <Marker position={centerLocation} />
      {/* {locationMarkers.map((locationMarker, index) => (
        <Marker
          key={index}
          position={locationMarker.coordinates}
          label={locationMarker.name}
          title={locationMarker.name}
        />
      ))} */}
    </GoogleMap>
  ) : (
    <p>Nedošlo ke správnému načtení Google Maps.</p>
  );
};
