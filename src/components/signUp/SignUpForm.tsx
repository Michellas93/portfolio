import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { auth, googleProvider } from "../../firebase/config";

import {
	createUserWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import google from "../../assets/icons8-google-48.png";

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
			message: "Hesla se neshodují",
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

	// tlacitko na prihlaseni
	const onSubmit: SubmitHandler<SignUpSchemaType> = async ({
		email,
		password,
	}) => {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
		} catch (error) {
			console.error(error);
		}
	};
	const signUpWithGoogle = async ({}) => {
		try {
			await signInWithPopup(auth, googleProvider);
		} catch (error) {
			console.error(error);
		}
	};

	// tlacitko na odhlaseni
	const logOut = async ({}) => {
		try {
			await signOut(auth);
		} catch (error) {
			console.error(error);
		}
	};
	console.log(auth?.currentUser?.email);
	console.log("error", errors);
	return (
		<div className="flex justify-center items-center h-screen">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col items-center p-4 w-96 border-2 border-darkGreen  bg-whiteT"
			>
				<div className="form-group w-full">
					{errors.email && (
						<span className="text-red-500 text-xs">{errors.email.message}</span>
					)}
					<label className="block text-left">
						<span className="block text-sm font-medium   text-slate-600">
							Email*
						</span>
					</label>
					<input
						className="input w-full p-3  rounded mb-4 border-2 border-darkGreen "
						placeholder="email"
						{...register("email")}
					/>
				</div>
				<div className="form-group w-full">
					{errors.password && (
						<span className="text-red-500 text-xs">
							{errors.password.message}
						</span>
					)}
					<label className="block text-left">
						<span className="block text-sm font-medium  text-slate-600 ">
							Heslo*
						</span>
					</label>
					<input
						type="password"
						className="input w-full p-3  rounded mb-4 border-2 border-darkGreen "
						placeholder="password"
						{...register("password")}
					/>
				</div>
				<div className="form-group w-full">
					{errors.confirm && (
						<span className="text-red-500 text-xs">
							{errors.confirm.message}
						</span>
					)}
					<label className="block text-left">
						<span className="block text-sm font-medium  text-slate-600 ">
							Zopakuj heslo*
						</span>
					</label>
					<input
						type="password"
						className="input w-full p-3  rounded mb-4 border-2 border-darkGreen"
						placeholder="confirm password"
						{...register("confirm")}
					/>
				</div>

				<button
					type="submit"
					className="w-full bg-darkGreen text-white p-2  hover:border-2 border-neutral-50 rounded-3xl"
				>
					Submit
				</button>

				<div className="flex flex-col items-center ">
					<p className="m-2">nebo</p>
					<button onClick={signUpWithGoogle}>
						<img className="w-8" src={google} />
					</button>
					<button
						onClick={logOut}
						className="w-full bg-darkGreen text-white p-2  hover:border-2 hover:border-neutral-50 rounded-3xl mt-2"
					>
						Log Out
					</button>
				</div>
			</form>
		</div>
	);
};
