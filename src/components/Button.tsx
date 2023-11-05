import { Link } from "react-router-dom";
import cs from "classnames";

import { MouseEvent, PropsWithChildren } from "react";

export interface ButtonProps extends PropsWithChildren {
	type?: "primary" | "secondary";
	onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
	children,
	onClick,
	type = "primary",
}: ButtonProps) => {
	const isPrimary = type === "primary";
	const isSecondary = type === "secondary";

	return (
		<button
			className={cs("px-6 pt-1 pb-1  rounded-xl border-2", {
				"bg-darkGreen hover:bg-darkBrown": isPrimary,
				"bg-darkBrown hover:bg-darkGreen": isSecondary,
			})}
			onClick={onClick}
		>
			<Link to="#">{children}</Link>
		</button>
	);
};
