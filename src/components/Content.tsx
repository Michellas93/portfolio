import { useLocation } from "react-router-dom";
import { ButtonLink } from "./ButtonLink";
import { ROUTES } from "../routes";

export const Content = () => {
  const { state } = useLocation();

  if (!state || !state.location) {
    return <div>Location data not available</div>;
  }

  const { location, imageUrl } = state;
  const { descriptionRegion, park, les } = location;

  return (
    <div className="flex flex-col  p-4 bg-gray-100 min-h-scree">
      <h1 className="text-2xl text-center font-bold text-gray-800 mb-4">
        Kam chcete vyrazit?
      </h1>
      <ButtonLink
        link={ROUTES.list()}
        location={location}
        imageUrl={imageUrl}
        variant="secondary"
      >
        zpět na seznam
      </ButtonLink>
      <p className="text-gray-600 mb-2">{descriptionRegion}</p>

      <ButtonLink
        link={ROUTES.park()}
        location={location}
        imageUrl={imageUrl}
        variant="secondary"
      >
        {park}
      </ButtonLink>

      <ButtonLink
        link={ROUTES.les()}
        location={location}
        imageUrl={imageUrl}
        variant="secondary"
      >
        {les}
      </ButtonLink>
    </div>
  );
};

export default Content;
