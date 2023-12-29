import { PointType } from "../../types";
import { ButtonLink } from "../ButtonLink";
import { ROUTES } from "../../routes";
import { useGetImageUrl } from "../../hooks/useGetImageUrl";
import logoSrc from "../../assets/loading.png";
import { LikeButton } from "../LikeButton";

export const ListItem = ({ imagesrc, name, id, likes }: PointType) => {
  const { imageUrl, isImageLoading } = useGetImageUrl(imagesrc);

  return (
    <div className="text-center text-slate-600 m-4 transition-transform duration-300 hover:scale-110 ">
      <div className="bg-colorLightGreen p-4 w-full  shadow-lg border rounded-lg ">
        <div className="text-lg text-slate-600 ">{name} </div>
        <div className="w-52 h-52">
          {/* TODO: Upravit classy */}
          <img
            className="w-full h-52 object-cover rounded-lg"
            src={isImageLoading ? logoSrc : imageUrl}
            alt={`Preview of ${name}`}
          />
        </div>
        <div className="flex justify-between pt-1">
          <ButtonLink link={ROUTES.point(id)} variant="secondary">
            Více
          </ButtonLink>
          <LikeButton likes={likes} docId={id} collectionName="point" />/
        </div>
      </div>
    </div>
  );
};
