import { useLocation } from "react-router-dom";
import { ROUTES } from "../../routes";
import { ButtonLink } from "../ButtonLink";

export const Louka = () => {
  const { state } = useLocation();

  if (!state || !state.location) {
    return <div>Location data not available</div>;
  }

  const { location, imageUrl } = state;
  const { listpark, parkDescription, name } = location;
  return (
    <div>
      <h1 className="lg:text-3xl font-bold text-slate-600 text-center m-6">
        {name}
      </h1>
      <ButtonLink
        link={ROUTES.list()}
        location={location}
        imageUrl={imageUrl}
        variant="secondary"
      >
        zpět na seznam
      </ButtonLink>
      <div className="container mx-auto p-4 ">
        <div className="grid md:grid-cols-3 gap-4 ">
          <div className="bg-colorLightGreen rounded-lg shadow-lg ">
            <h2 className="font-bold text-xl m-6 text-slate-600  text-center">
              {listpark[0]}
            </h2>
            <p className="p-4  text-slate-600  leading-6 ">
              {parkDescription[0]}
            </p>
            <div className="flex justify-center">
              <ButtonLink
                link={ROUTES.parkseznam()}
                location={location}
                imageUrl={imageUrl}
                variant="secondary"
              >
                mapa
              </ButtonLink>
            </div>
          </div>
          <div className="bg-colorLightGreen  rounded-lg shadow-lg ">
            <h2 className="font-bold text-xl m-6 text-slate-600 text-center">
              {listpark[1]}
            </h2>
            <p className="p-4  text-slate-600 leading-6 ">
              {parkDescription[1]}
            </p>
            <div className="flex justify-center ">
              <ButtonLink
                link={ROUTES.parkseznam()}
                location={location}
                imageUrl={imageUrl}
                variant="secondary"
              >
                mapa
              </ButtonLink>
            </div>
          </div>
          <div className="bg-colorLightGreen  rounded-lg shadow-lg">
            <h2 className="font-bold text-xl m-6 text-slate-600 text-center ">
              {listpark[2]}
            </h2>
            <p className="p-4  text-slate-600 leading-6 ">
              {parkDescription[2]}
            </p>
            <div className="flex justify-center">
              <ButtonLink
                link={ROUTES.parkseznam()}
                location={location}
                imageUrl={imageUrl}
                variant="secondary"
              >
                mapa
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
