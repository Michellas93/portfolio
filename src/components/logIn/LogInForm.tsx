import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { auth, googleProvider } from "../../firebase/config";
import google from "../../assets/icons8-google-48.png";
import { signInWithPopup } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";

type FormData = {
  email: string;
  password: string;
  data: string;
};
export const LogInForm = () => {
  const navigate = useNavigate();
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(3).max(20),
  });

  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const signUpWithGoogle = async ({}) => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  };
  const loginWithEmailPassword = async (data: FormData) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate("/LogOut");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(loginWithEmailPassword)}
        className="flex flex-col items-center p-4 w-96 border-2 border-darkGreen  bg-whiteT"
      >
        <div className="form-group w-full">
          <label className="block text-left">
            <span className="block text-sm font-medium   text-slate-600">
              Email*
            </span>
          </label>
          <input
            {...register("email")}
            className="input w-full p-3  rounded mb-4 border-2 border-darkGreen "
            placeholder="email"
          />
        </div>
        <div className="form-group w-full">
          <label className="block text-left">
            <span className="block text-sm font-medium  text-slate-600 ">
              Heslo*
            </span>
          </label>
          <input
            {...register("password")}
            type="password"
            className="input w-full p-3  rounded mb-4 border-2 border-darkGreen "
            placeholder="password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-darkGreen text-white p-2  hover:border-2 border-neutral-50 rounded-3xl"
        >
          <Link to={ROUTES.logout()}>Submit</Link>
        </button>

        <div className="flex flex-col items-center ">
          <p className="m-2">nebo</p>
          <button onClick={signUpWithGoogle}>
            <img className="w-8" src={google} />
          </button>
        </div>
      </form>
    </div>
  );
};
