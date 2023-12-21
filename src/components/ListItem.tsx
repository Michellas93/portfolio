import { PointType } from "../types";
import { ButtonLink } from "./ButtonLink";
import { ROUTES } from "../routes";
import { useGetImageUrl } from "../hooks/useGetImageUrl";

import logoSrc from "../assets/logo.png";
interface Props {
  point: PointType;
}

export const ListItem = ({ point }: Props) => {
  const { imageUrl, isImageLoading } = useGetImageUrl(point.imagesrc);

  return (
    <div className="text-center text-slate-600 m-4  ">
      <div className="bg-colorLightGreen p-4 w-full  shadow-lg border rounded-lg ">
        <div className="text-lg text-slate-600 ">{point.name} </div>
        <div className="w-52 ">
          {/* TODO: Upravit classy */}
          <img
            className="w-full h-52 object-cover rounded-lg"
            src={isImageLoading ? logoSrc : imageUrl}
            alt={`Preview of ${point.name}`}
          />
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
