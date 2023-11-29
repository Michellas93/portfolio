import { getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import { getPathReference } from "../firebase/config";

interface Props {
  location: {
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
}

export const ListItem = ({ location }: Props) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  useEffect(() => {
    const getImageUrl = async () => {
      const url = await getDownloadURL(getPathReference(location.imagesrc));
      setImageUrl(url);
    };
    getImageUrl();
  }, []);
  return (
    <div className="flex flex-col text-center">
      <div>{location.name} </div>
      <div> {location.region}</div>
      <div>{location.distance}</div>
      <div> {location.types}</div>
      <div> {location.freeRange}</div>
      <div> {location.description} </div>
      <img src={imageUrl} />
      <div> {location.likes}</div>
    </div>
  );
};
