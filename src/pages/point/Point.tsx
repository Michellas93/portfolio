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
  const res = useFetchDocument<PointType>("point", id ?? "");
  const { data, isLoading, error } = res;
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
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex flex-col h-screenflex items-center  bg-gradient-to-r from-darkGreen to-colorLightGreen shadow-md p-6 text-white">
        <div className="m-4 flex-row">
          <ButtonLink link={ROUTES.list()} variant="secondary">
            Zpět
          </ButtonLink>
        </div>

        <div className="flex flex-col items-center justify-between">
          <h1 className="text-2xl font-bold mb-4 text-left">{data.name}</h1>
          {isImageLoading ? (
            <Spinner />
          ) : (
            <img
              className="w-full h-fullmd:w-96 md:h-96 object-contain p-4"
              src={imageUrl}
              alt={`Preview of ${data.name}`}
            />
          )}

          <div className="flex flex-col items-center justify-start pt-14">
            <LikeButton
              likes={data.likes}
              collectionName="point"
              docId={id}
              classNames="ml-6"
            />
            <div className="flex flex-col md:flex-row items-center bg-darkGreen to-colorLightGreen shadow-md p-6 mt-6  rounded-lg">
              <p className="mt-4 text-center md:text-left p-4">
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
