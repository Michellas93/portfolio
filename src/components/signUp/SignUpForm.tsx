import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";

const SignUpSchema = z
	.object({
		email: z.string().email(),
		password: z.string().min(3).max(20),
		confirm: z.string().min(3).max(20),
	})
	.refine(
		(data) => {
			console.log(data);
			return data.password === data.confirm;
		},
		{
			message: "Passwords don't match",
			path: ["confirm"],
		}
	);
type SignUpSchemaType = z.infer<typeof SignUpSchema>;

export const SignUpForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });
	console.log(auth.currentUser);

	const onSubmit: SubmitHandler<SignUpSchemaType> = async ({
		email,
		password,
	}) => {
		try {
			// await createUserWithEmailAndPassword(auth, email, password);
		} catch (error) {
			console.error(error);
		}
	};
	console.log("error", errors);
	return (
		<form onSubmit={handleSubmit(onSubmit)} className="form">
			<input className="input" placeholder="email" {...register("email")} />
			{errors.email && <span>{errors.email.message}</span>}

			<input
				type="password"
				className="input"
				placeholder="password"
				{...register("password")}
			/>
			<input
				type="password"
				className="input"
				placeholder="confirm password"
				{...register("confirm")}
			/>

			{errors.password && <span>{errors.password.message}</span>}
			{errors.confirm && <span>{errors.confirm.message}</span>}

			<button type="submit">submit</button>
		</form>
	);
};
