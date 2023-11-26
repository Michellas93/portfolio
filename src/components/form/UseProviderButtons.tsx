import googleImgUrl from "../../assets/icons8-google-48.png";
import { signInWithGoogle } from "../../firebase/utils";

export const UseProviderButtons = () => {
  return (
    <div className="flex flex-col items-center ">
      <p className="m-2">nebo</p>
      <button onClick={signInWithGoogle}>
        <img className="w-8" src={googleImgUrl} alt="Google provider icon" />
      </button>
    </div>
  );
};
