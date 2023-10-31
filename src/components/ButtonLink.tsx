import { useNavigate } from "react-router-dom";
import { Button, ButtonProps } from "./Button";

type Props = Omit<ButtonProps, "onClick"> & {
	link: string;
};

export const ButtonLink = ({ link, ...props }: Props) => {
	const navigate = useNavigate();
	return (
		<div className="flex space-x-3">
			<Button onClick={(event) => console.log("klik", event)} type="primary">
				Login
			</Button>
			<Button onClick={(event) => console.log("klik", event)} type="secondary">
				Sign in
			</Button>
		</div>
		// {/* <Button
		// 	{...props}
		// 	onClick={() => {
		// 		navigate(link);
		// 	}}
		// /> */}
	);
};
