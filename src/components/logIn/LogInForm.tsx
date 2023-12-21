import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginWithEmailPassword } from "../../firebase/utils";
import { Field } from "../form/Field";
import { SubmitButton } from "../form/SubmitButton";
import { ThirdPartyProviderButtons } from "../form/ThirdPartyProviderButtons";

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(20),
});

type LoginSchemaSchemaType = z.infer<typeof LoginSchema>;

export const LogInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isSubmitting },
  } = useForm<LoginSchemaSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit((formData) => loginWithEmailPassword(formData))}
        className="flex flex-col items-center p-4 w-96 border-2 border-darkGreen bg-whiteT"
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

        <SubmitButton isLoading={isLoading || isSubmitting} />
        <ThirdPartyProviderButtons />
      </form>
    </div>
  );
};
