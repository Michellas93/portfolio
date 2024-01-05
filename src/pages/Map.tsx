import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const GOOGLE_MAPS_API_KEY = "AIzaSyDqsR-Bwo5PJnwk3Yfj4qy3jEt_hRpS5ac";

const containerStyle = {
  width: "1000px",
  height: "400px",
};

type Props = {
  location: {
    coordinates: {
      lat: number;
      lng: number;
    };
    name: string;
    zoom: number;
  };
};

export const Map = ({ location }: Props) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={location.coordinates}
      zoom={location.zoom}
    >
      <Marker
        position={location.coordinates}
        label={location.name}
        title={location.name}
      />
    </GoogleMap>
  ) : (
    <></>
  );
};
