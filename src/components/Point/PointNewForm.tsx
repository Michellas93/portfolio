import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field } from "../form/Field";
import { SubmitButton } from "../form/SubmitButton";
import { TextAreaField } from "../form/TextAreaField";
import { Select, SelectOption } from "../form/Select";
import {
  PointNewFormSchemaType,
  PointNewFormSchema,
} from "./PointNewFormSchema";
import FileInput from "../form/FileInput";

type Props = {
  districtOptions?: SelectOption[];
  typeOptions: SelectOption[];
  onSubmit: (formData: PointNewFormSchemaType) => void;
};

export const PointNewForm = ({
  typeOptions,
  districtOptions,
  onSubmit,
}: Props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isLoading, isSubmitting },
  } = useForm<PointNewFormSchemaType>({
    resolver: zodResolver(PointNewFormSchema),
  });

  return (
    <div className="flex justify-center items-center h-screen bg-colorLightGreen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-whiteT shadow-md rounded px-8 pt-6 pb-8 mb-8 w-full max-w-lg flex flex-col  "
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

        {districtOptions && (
          <Select
            label="Oblast"
            options={districtOptions}
            error={errors?.district}
            register={register("district")}
          />
        )}
        <Select
          label="typ"
          error={errors?.type}
          register={register("type")}
          options={typeOptions}
        />
        <FileInput
          control={control}
          name="picture"
          rules={{ required: "Picture is required" }}
          error={errors.picture}
        />

        <SubmitButton isLoading={isLoading || isSubmitting} />
      </form>
    </div>
  );
};
