import { useNavigate } from "react-router-dom";
import { Button, ButtonProps } from "./Button";

type Props = Omit<ButtonProps, "onClick"> & {
  link: string;
  location: {
    id: string;
    name: string;
    region: string;
    distance: number;
    types: string;
    freeRange: string;
    description: string;
    imagesrc: string;
    likes: number;
  };
  imageUrl: string;
};

export const ButtonLink = ({ link, location, imageUrl, ...props }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="flex space-x-3">
      <Button
        {...props}
        onClick={() => {
          navigate(link, { state: { location, imageUrl } });
        }}
      />
    </div>
  );
};
