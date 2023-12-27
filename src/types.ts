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
export type PointType = {
  filter(arg0: (item: any) => boolean): unknown;
  id: string;
  name: string;
  description: string;
  imagesrc: string;
};
export type DistrictType = {
  name: string;
  id: string;
};
