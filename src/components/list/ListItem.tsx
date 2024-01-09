import { PointType } from "../../types";
import { ButtonLink } from "../ButtonLink";
import { ROUTES } from "../../routes";
import { useGetImageUrl } from "../../hooks/useGetImageUrl";
import logoSrc from "../../assets/loading.png";
import { LikeButton } from "../LikeButton";

export const ListItem = ({ imagesrc, name, id, likes }: PointType) => {
  const { imageUrl, isImageLoading } = useGetImageUrl(imagesrc);

  return (
    <ButtonLink link={ROUTES.point(id)} variant="tertiary">
      <div className="text-center text-white">
        <div className="bg-darkGreen p-3 w-full rounded-lg">
          <div className="text-lg mb-2 group-hover:underline">{name}</div>

          <div className="w-52 h-52 mb-2">
            <img
              className="w-full h-52 object-cover rounded-lg"
              src={isImageLoading ? logoSrc : imageUrl}
              alt={`Preview of ${name}`}
            />
          </div>

          <LikeButton likes={likes} docId={id} collectionName="point" />
        </div>
      </div>
    </ButtonLink>
  );
};
