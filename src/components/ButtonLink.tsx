import { useNavigate } from "react-router-dom";
import { Button, ButtonProps } from "./Button";

type Props = Omit<ButtonProps, "onClick"> & {
	link: string;
};

export const ButtonLink = ({ link, ...props }: Props) => {
	const navigate = useNavigate();
	return (
		<div className="flex space-x-3">
			<Button
				{...props}
				onClick={() => {
					navigate(link);
				}}
			/>
		</div>
	);
};
