import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpWithEmailPassword } from "../../firebase/utils";
import { Field } from "../form/Field";
import { SubmitButton } from "../form/SubmitButton";
import { ThirdPartyProviderButtons } from "../form/ThirdPartyProviderButtons";

const SignUpSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(3).max(20),
    confirm: z.string().min(3).max(20),
  })
  .refine(
    (data) => {
      return data.password === data.confirm;
    },
    {
      message: "Hesla se neshodují",
      path: ["confirm"],
    }
  );

type SignUpSchemaType = z.infer<typeof SignUpSchema>;

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isLoading },
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit((formData) => signUpWithEmailPassword(formData))}
        className="flex flex-col items-center p-4 w-96 border-2 border-darkGreen  bg-whiteT"
      >
        <Field
          label="Email"
          error={errors?.email}
          placeholder="Your email"
          type="email"
          register={register("email")}
        />

        <Field
          label="Heslo"
          error={errors?.password}
          placeholder="Your password"
          type="password"
          register={register("password")}
        />

        <Field
          label="Zopakuj heslo"
          error={errors?.confirm}
          placeholder="Confirm your password"
          type="password"
          register={register("confirm")}
        />

        <SubmitButton isLoading={isLoading || isSubmitting} />

        <ThirdPartyProviderButtons />
      </form>
    </div>
  );
};
