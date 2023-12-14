import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field } from "../form/Field";
import { SubmitButton } from "../form/SubmitButton";
import { TextAreaField } from "../form/TextAreaField";
import { Select, SelectOption } from "../form/Select";

export type PointNewFormData = {
  name: string;
  description: string;
  district: string;
};

type Props = {
  selectOptions?: SelectOption[];
  onSubmit: (formData: PointNewFormData) => void;
};

export const PointNewForm = ({ selectOptions, onSubmit }: Props) => {
  const schema = z.object({
    name: z.string().min(4).max(25),
    description: z.string().min(5).max(300),
    // district je nepovinný
    district: z.string().optional(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isSubmitting },
  } = useForm<PointNewFormData>({
    resolver: zodResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit((formData) => onSubmit(formData))}
      className="flex flex-col items-center p-4 w-full border-2 border-darkGreen bg-whiteT"
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
      {/* pokud mi neprijdou select options nezobrazuj select */}
      {selectOptions && (
        <Select
          label="Oblast"
          options={selectOptions}
          error={errors?.district}
          register={register("district")}
        />
      )}

      <SubmitButton isLoading={isLoading || isSubmitting} />
    </form>
  );
};
