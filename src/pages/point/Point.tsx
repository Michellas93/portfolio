import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCollectionItem } from "../../firebase/config";
import { PointType } from "../../types";
import { ROUTES } from "../../routes";
import { useGetImageUrl } from "../../hooks/useGetImageUrl";
import { Spinner } from "../../components/Spinner";
import { ButtonLink } from "../../components/ButtonLink";

export const Point = () => {
  const { id } = useParams();
  const [data, setData] = useState<PointType | null>(null);

  const [loading, setLoading] = useState(false);
  const { imageUrl, isImageLoading } = useGetImageUrl(data?.imagesrc);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      if (id) {
        try {
          const docSnapshot = await getCollectionItem("point", id);
          if (docSnapshot.exists()) {
            setData(docSnapshot.data() as PointType);
          } else {
            console.error("Dokument nenalezen");
          }
        } catch (err) {
          console.error("Chyba při získávání dokumentu:", err);
        } finally {
          setLoading(false);
        }
      }
    };

    getData();
  }, [id]);

  if (loading) {
    return <div>Načítám data...</div>;
  }

  if (!data) {
    return <div>Bohužel vámi hledaná lokace se nepodařila nalézt</div>;
  }

  return (
    <div className="relative flex justify-center items-center h-screen bg-colorLightGreen">
      <div className="absolute top-0 left-0 m-4">
        <ButtonLink link={ROUTES.list()} variant="secondary">
          Zpět
        </ButtonLink>
      </div>
      <div className="flex flex-col relative">
        <h1 className="text-2xl font-bold mb-4 text-center">{data.name}</h1>
        {isImageLoading ? (
          <Spinner />
        ) : (
          <img src={imageUrl} alt={`Preview of ${data.name}`} />
        )}
        <div className="border rounded-lg p-4 max-w-lg mx-auto bg-white bg-opacity-90 shadow-lg absolute bottom-0 transition-transform duration-300 hover:scale-110  ">
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
};
