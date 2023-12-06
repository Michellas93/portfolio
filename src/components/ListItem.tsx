import { getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import { getPathReference } from "../firebase/config";
import { LocationType } from "../types";
import { ButtonLink } from "./ButtonLink";
import { ROUTES } from "../routes";

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
      <ButtonLink link={ROUTES.point(location.id)}>Více</ButtonLink>
    </div>
  );
};
