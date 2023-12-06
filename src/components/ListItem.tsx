import { getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import { getPathReference } from "../firebase/config";
import { LocationType, PointType } from "../types";
import { ButtonLink } from "./ButtonLink";
import { ROUTES } from "../routes";

interface Props {
  point: PointType;
  location: LocationType;
}

export const ListItem = ({ point, location }: Props) => {
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
      <div>{point.name} </div>
      <img src={imageUrl} alt={`Image of ${location.name}`} />

      <ButtonLink link={ROUTES.point(location.id)}>Více</ButtonLink>
    </div>
  );
};
