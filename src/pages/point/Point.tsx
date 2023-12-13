import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCollectionItem } from "../../firebase/config";
import { PointType } from "../../types";

export const Point = () => {
  const { id } = useParams();
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
    <div>
      <h1>{documentData.name}</h1>
      <p>{documentData.description}</p>
    </div>
  );
};
