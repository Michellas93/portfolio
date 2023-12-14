import { ButtonLink } from "./ButtonLink";
import { ROUTES } from "../routes";

interface Props {
  img: string;
  titleCard: string;
  paragrapCard: string;
}

export const CardItem = ({ img, titleCard, paragrapCard }: Props) => {
  return (
    <div>
      <div className="text-center w-60 shadow  ">
        <div className="ml-2 mr-2">
          <img
            className=" w-60   object-cover h-52 rounded-md"
            src={img}
            alt="granule"
          />
        </div>
        <h3 className=" text-lg text-colorLightGreen">{titleCard}</h3>
        <p className=" text-sm line-clamp-3  text-slate-600">
          {paragrapCard}
          {/* Strava Kvalitní psí krmivo by mělo obsahovat vyvážený poměr bílkovin,
					tuků, sacharidů, vitamínů a minerálů, které odpovídají věku, plemeni,
					velikosti a úrovni aktivity psa. */}
        </p>
      </div>
    </div>
  );
};
