import { PointType } from "../types";
import { ButtonLink } from "./ButtonLink";
import { ROUTES } from "../routes";
import { getDownloadURL } from "firebase/storage";
import { getPathReference } from "../firebase/config";
import { useEffect, useState } from "react";

interface Props {
  point: PointType;
}

export const ListItem = ({ point }: Props) => {
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    const getImageUrl = async () => {
      const url = await getDownloadURL(getPathReference(point.imagesrc));
      setImageUrl(url);
    };
    getImageUrl();
  }, [point.imagesrc]);
  return (
    <div className="text-center text-slate-600 m-4  ">
      <div className="bg-colorLightGreen p-4 w-full  shadow-lg border rounded-lg ">
        <div className="text-lg text-slate-600 ">{point.name} </div>
        <div className="w-52 ">
          <img src={imageUrl} alt={`Image of ${point.name}`} />
        </div>
        <div className="flex justify-center pt-1">
          <ButtonLink link={ROUTES.point(point.id)} variant="secondary">
            Více
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};
