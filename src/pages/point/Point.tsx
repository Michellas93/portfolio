import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCollectionItem } from "../../firebase/config";
import { PointType } from "../../types";
import { ButtonLink } from "../../components/ButtonLink";
import { ROUTES } from "../../routes";

export const Point = () => {
  const { id, imageUrl } = useParams();
  const [documentData, setDocumentData] = useState<PointType | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      if (id) {
        try {
          const docSnapshot = await getCollectionItem("point", id);
          if (docSnapshot.exists()) {
            setDocumentData(docSnapshot.data() as PointType);
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

  if (!documentData) {
    return <div>Bohužel vámi hledaná lokace se nepodařila nalézt</div>;
  }

  return (
    <div className="relative flex justify-center items-center h-screen">
      <div className="absolute top-0 left-0 m-4">
        <ButtonLink link={ROUTES.list()} variant="secondary">
          Zpět
        </ButtonLink>
      </div>
      <img src={imageUrl} alt={`Image of ${documentData.name}`} />
      <div className="border rounded-lg p-4 max-w-lg mx-auto bg-white bg-opacity-90 shadow-lg">
        <h1 className="text-2xl font-bold mb-4">{documentData.name}</h1>
        <p>{documentData.description}</p>
      </div>
    </div>
  );
};
