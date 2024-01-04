import { useNavigate } from "react-router-dom";
import { Button, ButtonProps } from "./Button";

type Props = Omit<ButtonProps, "onClick"> & {
  link: string;
  onClickCallback?: () => void;
};

export const ButtonLink = ({ link, onClickCallback, ...props }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="flex space-x-3">
      <Button
        {...props}
        onClick={() => {
          navigate(link);
          onClickCallback && onClickCallback();
        }}
      />
    </div>
  );
};
