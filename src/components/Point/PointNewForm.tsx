import { z } from "zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field } from "../form/Field";
import { SubmitButton } from "../form/SubmitButton";
import { TextAreaField } from "../form/TextAreaField";
import { Select, SelectOption } from "../form/Select";
import { db, storage } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import {
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";

export type PointNewFormData = {
  im(im: any): unknown;
  imageUrl(imageUrl: any): unknown;
  name: string;
  description: string;
  district: string;
};

type Props = {
  selectOptions?: SelectOption[];
  onSubmit: (formData: PointNewFormData) => void;
};

export const PointNewForm = ({ selectOptions, onSubmit }: Props) => {
  const [imageUpload, setImageUpload] = useState(null);

  const schema = z.object({
    name: z.string().min(4).max(25),
    description: z.string().min(5).max(300),

    district: z.string().optional(),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isLoading, isSubmitting },
  } = useForm<PointNewFormData>({
    resolver: zodResolver(schema),
  });

  const handleSubmitToFirebase = async (formData: PointNewFormData) => {
    if (imageUpload === null) {
      console.log("Prosim vyberte obrazek");
      return;
    }
    // const imageRef = storageRef(storage, `${uuid()}`);

    // uploadBytes(imageRef, imageUpload)
    //   .then((snapshot) => {
    //     getDownloadURL(snapshot.ref)
    //       .then((url) => {
    //         // todo url dostat do formData
    //         const docRef = await addDoc(collection(db, "point"), formData);
    //         console.log("Document written with ID: ", docRef.id);
    //         onSubmit(formData);
    //         reset({
    //           name: "",
    //           description: "",
    //           district: "",
    //         });
    //       })
    //       .catch((error) => {
    //         console.error("Chyba při odesílání dat do Firebase:", error);
    //       });
    //   })
    //   .catch((error) => {
    //     console.error("Chyba při odesílání dat do Firebase:", error);
    //   });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-colorLightGreen">
      <form
        onSubmit={handleSubmit(handleSubmitToFirebase)}
        className="bg-whiteT shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg flex flex-col  "
      >
        <Field
          label="Název Lokality"
          error={errors?.name}
          placeholder="Název lokality"
          register={register("name")}
        />
        <TextAreaField
          label="Popis lokality"
          error={errors?.description}
          register={register("description")}
        />

        {selectOptions && (
          <Select
            label="Oblast"
            options={selectOptions}
            error={errors?.district}
            register={register("district")}
          />
        )}
        <label for="imageInput">Pridejte fotku</label>
        <input
          type="file"
          id="imageInput"
          name="imageInput"
          accept="image/png,image/jpeg"
          onChange={(e) => {
            setImageUpload(e.target?.files[0]);
          }}
        />
        <SubmitButton isLoading={isLoading || isSubmitting} />
      </form>
    </div>
  );
};
