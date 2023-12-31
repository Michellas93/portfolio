import { useParams } from "react-router-dom";
import { PointType } from "../../types";
import { ROUTES } from "../../routes";
import { useGetImageUrl } from "../../hooks/useGetImageUrl";
import { Spinner } from "../../components/Spinner";
import { ButtonLink } from "../../components/ButtonLink";
import { LikeButton } from "../../components/LikeButton";

import { useFetchDocument } from "../../hooks/useFetchDocument";

export const Point = () => {
  const { id } = useParams();

  const { isLoading, data, error } = useFetchDocument<PointType>(
    "point",
    id ?? ""
  );

  const { imageUrl, isImageLoading } = useGetImageUrl(data?.imagesrc);

  if (isLoading) {
    return <div>Načítám data...</div>;
  }

  if (error) {
    return <div> {error}</div>;
  }

  if (!data || !id) {
    return <div>Bohužel vámi hledaná lokace se nepodařila nalézt</div>;
  }

  return (
    <div className="flex flex-col h-screen bg-colorLightGreen">
      <div className="m-4 flex-row">
        <ButtonLink link={ROUTES.list()} variant="secondary">
          Zpět
        </ButtonLink>
      </div>
      <div className="flex flex-row bg-white rounded-lg shadow-lg m-8 md:flex-row md:space-x-4 overflow-hidden">
        <div className="flex flex-col items-center justify-between ">
          {isImageLoading ? (
            <Spinner />
          ) : (
            <img
              className="w-full h-full md:w-1/2 md:w-96 md:h-96 object-contain p-4"
              src={imageUrl}
              alt={`Preview of ${data.name}`}
            />
          )}
        </div>

        <div className="flex flex-col items-center justify-start pt-14">
          <h1 className="text-2xl font-bold mb-4 text-left">{data.name}</h1>
          <LikeButton
            likes={data.likes}
            collectionName="point"
            docId={id}
            classNames="ml-6"
          />
          <p className="mt-4 text-center md:text-left">{data.description}</p>
        </div>
      </div>
    </div>
  );
};
