import googleImgUrl from "../../assets/icons8-google-48.png";
import { signInWithGoogle } from "../../firebase/utils";
import { Button } from "../Button";

export const ThirdPartyProviderButtons = () => {
  return (
    <div className="flex flex-col items-center ">
      <p className="m-2">nebo</p>
      <Button onClick={signInWithGoogle}>
        <img className="w-8" src={googleImgUrl} alt="Google provider icon" />
      </Button>
    </div>
  );
};
