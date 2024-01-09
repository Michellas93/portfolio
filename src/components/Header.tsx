import pohyb from "../assets/dogisek.png";
import { useAuth } from "../firebase/AuthContext";
import { ROUTES } from "../routes";
import { ButtonLink } from "./ButtonLink";

interface Props {
  header: string;
  headerParagraph: string;
}

export const Header = ({ header, headerParagraph }: Props) => {
  const { user } = useAuth();
  return (
    <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-darkGreen to-colorLightGreen shadow-md p-6 md:p-8">
      <div className="text-center md:flex-1 ">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight ">
          {header}
        </h1>
        <p className="text-base md:text-lg text-white mt-2 md:mt-4">
          {headerParagraph}
        </p>
        {!user && (
          <div className="flex mt-4 space-x-3 justify-center text-white">
            <ButtonLink link={ROUTES.login()} variant="primary">
              Přihlásit
            </ButtonLink>
            <ButtonLink link={ROUTES.signup()} variant="secondary">
              Zaregistrovat
            </ButtonLink>
          </div>
        )}
      </div>
      <img
        className="w-1/5 pl-6 mt-4 mb-4 transition-transform duration-300 hover:scale-110"
        src={pohyb}
        alt="Pohyb"
      />
    </div>
  );
};
