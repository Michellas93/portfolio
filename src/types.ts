import { GeoPoint } from "firebase/firestore";

export type LocationType = {
  id: string;
  name: string;
  region: string;
  distance: number;
  types: string;
  freeRange: string;
  description: string;
  imagesrc: string;
  likes: number;
};

export enum PointTypeOption {
  park = "park",
  forest = "forest",
  meadow = "meadow",
}

export type PointType = {
  id: string;
  name: string;
  description: string;
  imagesrc: string;
  type: PointTypeOption;
  likes: string[];
  geolocation: GeoPoint;
};

export type DistrictType = {
  name: string;
  id: string;
};

export type LocationMarker = {
  coordinates: {
    lat: number;
    lng: number;
  };
  name: string;
};
