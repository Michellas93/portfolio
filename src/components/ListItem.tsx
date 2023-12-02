import { getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import { getPathReference } from "../firebase/config";
import { LocationType } from "../types";

interface Props {
  location: LocationType;
}

export const ListItem = ({ location }: Props) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  useEffect(() => {
    const getImageUrl = async () => {
      const url = await getDownloadURL(getPathReference(location.imagesrc));
      setImageUrl(url);
    };
    getImageUrl();
  }, [location.imagesrc]);
  return (
    <div className="flex flex-col text-center">
      <div>{location.name} </div>
      <div> {location.region}</div>
      <div>{location.distance}</div>
      <div> {location.types}</div>
      <div> {location.freeRange}</div>
      <div> {location.description} </div>
      <img src={imageUrl} alt="Location" />
      <div> {location.likes}</div>
    </div>
  );
};
