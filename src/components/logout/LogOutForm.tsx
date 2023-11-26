import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext";

export const LogOutForm = () => {
  const navigate = useNavigate();
  const { logoutUser } = useContext(AuthContext);
  // tlacitko na odhlaseni
  const logOut = async ({}) => {
    try {
      await signOut(auth);
      logoutUser();
      navigate(ROUTES.login());
    } catch (error) {
      console.error(error);
    }
  };
  console.log(auth?.currentUser?.email);
  console.log("odhlasit");
  return (
    <div className="text-right">
      <button
        onClick={logOut}
        className=" bg-darkGreen  rounded-xl border-2 text-white p-2  hover:border-2 hover:border-neutral-50  mt-2 mr-4"
      >
        <Link to={ROUTES.login()}>LogOut</Link>
      </button>
    </div>
  );
};
