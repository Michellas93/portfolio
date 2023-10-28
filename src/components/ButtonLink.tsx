import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonProps } from "./Button";

type Props = Omit<ButtonProps, "onClick"> & {
	link: string;
};

export const ButtonLink = ({ link, ...props }: Props) => {
	const navigate = useNavigate();
	return (
		<Button
			{...props}
			onClick={() => {
				navigate(link);
			}}
		/>
	);
};
