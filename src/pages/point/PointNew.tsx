import {
  PointNewForm,
  PointNewFormData,
} from "../../components/Point/PointNewForm";
import { useFetchCollection } from "../../hooks/useFetchCollection";
import { DistrictType } from "../../types";

export const PointNew = () => {
  const { data, isLoading, error } =
    useFetchCollection<DistrictType>("district");
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
  const submitForm = (formData: PointNewFormData) => {
    console.log(
      "🚀 ~ file: PointNew.tsx:22 ~ submitForm ~ formData:",
      formData
    );
  };

  return (
    <div className="bg-colorLightGreen">
      <h1 className="text-center">Přidat point</h1>
      <PointNewForm selectOptions={selectOptions} onSubmit={submitForm} />
    </div>
  );
};
