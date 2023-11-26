import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginWithEmailPassword } from "../../firebase/utils";
import { Field } from "../form/Field";
import { SubmitButton } from "../form/SubmitButton";
import { ThirdPartyProviderButtons } from "../form/ThirdPartyProviderButtons";

type FormData = {
  email: string;
  password: string;
  data: string;
};
export const LogInForm = () => {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(3).max(20),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = () =>
    handleSubmit((formData) => {
      loginWithEmailPassword(formData);
    });

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={onSubmit}
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
        <SubmitButton />
        <ThirdPartyProviderButtons />
      </form>
    </div>
  );
};
