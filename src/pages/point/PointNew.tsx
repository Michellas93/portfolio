import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";

import { PointNewForm } from "../../components/Point/PointNewForm";
import { useFetchCollection } from "../../hooks/useFetchCollection";
import { DistrictType } from "../../types";
import { db, getCollection } from "../../firebase/config";
import { PointNewFormSchemaType } from "../../components/Point/PointNewFormSchema";
import { addDoc, collection } from "firebase/firestore";
import { uploadImage } from "../../firebase/utils";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import { POINT_TYPE_OPTIONS } from "../../constants";

export const PointNew = () => {
  const { data, isLoading, error } = useFetchCollection<DistrictType>(
    getCollection("district")
  );
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div> {error}</div>;
  }

  const selectOptions = data?.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const submitForm = async (formData: PointNewFormSchemaType) => {
    const file = formData.picture;
    const imagesrc = await uploadImage(file, `pointPictures/${uuid()}`);

    if (!imagesrc) {
      return toast.error("Nepodařilo se nahrát obrázek");
    }
    const newPoint = {
      imagesrc,
      name: formData.name,
      district: formData.district,
      description: formData.description,
    };

    try {
      await addDoc(collection(db, "point"), newPoint);
      toast.success(`Místo: "${formData.name}" bylo uloženo do databáze`);
      navigate(ROUTES.list());
    } catch (err: unknown) {
      toast.error("Failed to write data to db.");
      if (err instanceof Error) {
        console.error("Error adding document: ", err.message);
      }
    }
  };

  return (
    <div className="bg-colorLightGreen">
      <h1 className="text-center text-5xl text-slate-600 pt-10">
        Přidat point
      </h1>
      <PointNewForm
        districtOptions={selectOptions}
        typeOptions={POINT_TYPE_OPTIONS}
        onSubmit={submitForm}
      />
    </div>
  );
};
