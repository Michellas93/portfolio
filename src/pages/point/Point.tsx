import { useParams, useSearchParams } from "react-router-dom";
import { PointType } from "../../types";
import { ROUTES } from "../../routes";
import { useGetImageUrl } from "../../hooks/useGetImageUrl";
import { Spinner } from "../../components/Spinner";
import { ButtonLink } from "../../components/ButtonLink";
import { LikeButton } from "../../components/LikeButton";
import { useFetchDocument } from "../../hooks/useFetchDocument";

export const Point = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
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
    <div className="flex flex-col">
      <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-darkGreen to-colorLightGreen shadow-md p-6 text-white">
        <div className="flex justify-between w-full mb-4">
          <ButtonLink
            link={
              searchParams.get("map")
                ? `${ROUTES.maps()}?activeMarkerId=${id}`
                : ROUTES.list()
            }
            variant="secondary"
          >
            Zpět
          </ButtonLink>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left">
            {data.name}
          </h1>
          <LikeButton
            likes={data.likes}
            collectionName="point"
            docId={id}
            classNames="ml-6 font-bold"
          />
        </div>

        <div className="relative flex flex-col items-center justify-start rounded-3xl">
          {isImageLoading ? (
            <Spinner />
          ) : (
            <img
              className="h-auto w-full md:w-3/4 lg:w-1/2 object-contain rounded-t-2xl mb-5"
              src={imageUrl}
              alt={`Preview of ${data.name}`}
            />
          )}

          <div className="w-full md:w-3/4 lg:w-2/3 flex flex-col items-center justify-start">
            <div className="bg-darkGreen to-colorLightGreen shadow-md p-8 rounded-lg mb-8 text-xl border-2 border-white">
              <p className="text-center md:text-left leading-8">
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
