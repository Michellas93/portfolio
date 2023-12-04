import pohyb from "../assets/venceni.png";
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
    <div className="flex items-center ml-8 mr-8 ">
      <div className="ml-10  ">
        <h1 className="text-6xl mt-4 ">{header}</h1>
        <p className="leading-8 mt-4 text-slate-600 ">{headerParagraph}</p>
        {!user && (
          <div className="flex mt-4 space-x-3">
            <ButtonLink
              link={ROUTES.login()}
              variant="primary"
              location={{
                id: "",
                name: "",
                region: "",
                distance: 0,
                types: "",
                freeRange: "",
                description: "",
                imagesrc: "",
                likes: 0,
              }}
              imageUrl={""}
            >
              Log in
            </ButtonLink>
            <ButtonLink
              link={ROUTES.signup()}
              variant="secondary"
              location={{
                id: "",
                name: "",
                region: "",
                distance: 0,
                types: "",
                freeRange: "",
                description: "",
                imagesrc: "",
                likes: 0,
              }}
              imageUrl={""}
            >
              Sign up
            </ButtonLink>
          </div>
        )}
      </div>
      <img className="w-1/3 pl-6" src={pohyb} alt="Pohyb" />
    </div>
  );
};
