import { useLocation } from "react-router-dom";
import { ROUTES } from "../../routes";
import { ButtonLink } from "../ButtonLink";

export const Les = () => {
  const { state } = useLocation();

  if (!state || !state.location) {
    return <div>Location data not available</div>;
  }

  const { location, imageUrl } = state;
  const { name, listLes, lesDescription } = location;
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
              {listLes[0]}
            </h2>
            <p className="p-4  text-slate-600  leading-6 ">
              {lesDescription[0]}
            </p>
            <div className="flex justify-center">
              <ButtonLink
                link={ROUTES.les()}
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
              {listLes[1]}
            </h2>
            <p className="p-4  text-slate-600 leading-6 ">
              {lesDescription[1]}
            </p>
            <div className="flex justify-center ">
              <ButtonLink
                link={ROUTES.les()}
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
              {listLes[2]}
            </h2>
            <p className="p-4  text-slate-600 leading-6 ">
              {lesDescription[2]}
            </p>
            <div className="flex justify-center">
              <ButtonLink
                link={ROUTES.les()}
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
              {listLes[3]}
            </h2>
            <p className="p-4  text-slate-600 leading-6 ">
              {lesDescription[3]}
            </p>
            <div className="flex justify-center">
              <ButtonLink
                link={ROUTES.les()}
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
