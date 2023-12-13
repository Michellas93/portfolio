import { PointType } from "../types";
import { ButtonLink } from "./ButtonLink";
import { ROUTES } from "../routes";

interface Props {
  point: PointType;
}

export const ListItem = ({ point }: Props) => {
  // NEZAPOMENOUT UPRAVIT!!!
  // console.log("🚀 ~ file: ListItem.tsx:13 ~ ListItem ~ location:", location.id);
  // const [imageUrl, setImageUrl] = useState<string>("");

  // useEffect(() => {
  //   const getImageUrl = async () => {
  //     const url = await getDownloadURL(getPathReference(point.imagesrc));
  //     setImageUrl(url);
  //   };
  //   getImageUrl();
  // }, [point.imagesrc]);
  return (
    <div className="flex flex-col text-center">
      <div>{point.name} </div>
      {/* <img src={imageUrl} alt={`Image of ${point.name}`} /> */}
      <ButtonLink link={ROUTES.point(point.id)}>Více</ButtonLink>
    </div>
  );
};
