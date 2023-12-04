import { ButtonLink } from "../components/ButtonLink";
import { getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import { getPathReference } from "../firebase/config";
import { LocationType } from "../types";
import { ROUTES } from "../routes";

interface Props {
  location: LocationType;
}

export const ListItem = ({ location }: Props) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  useEffect(() => {
    const getImageUrl = async () => {
      const url = await getDownloadURL(getPathReference(location.imagesrc));

      setImageUrl(url);
    };
    getImageUrl();
  }, [location.imagesrc]);
  return (
    <div>
      <div className="flex bg-colorLightGreen rounded-lg shadow-md  justify-between m-2 ">
        <img
          className="rounded-lg  w-96 h-auto object-cover  text-center p-2 "
          src={imageUrl}
        />
        <div className="flex justify-center items-center flex-col">
          <div className="text-xl md:text-2xl lg:text-3xl text-center font-bold text-slate-600  pr-8 flex-none ">
            {location.name}
          </div>

          <div className=" text-slate-600 p-2 items-center justify-center flex r">
            {location.description}
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-5 ">
        <ButtonLink
          link={ROUTES.content()}
          location={location}
          imageUrl={imageUrl}
          variant="secondary"
        >
          Více Informací
        </ButtonLink>
      </div>
    </div>
  );
};
