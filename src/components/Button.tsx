import { ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import cs from "classnames";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary";
}

export const Button = ({
	children,
	className,
	variant = "primary",
	...rest
}: ButtonProps) => {
	const isPrimary = variant === "primary";
	const isSecondary = variant === "secondary";
	console.log(className);

	return (
		<button
			{...rest}
			className={cs(className, "px-6 pt-1 pb-1  rounded-xl border-2 m-1 ", {
				"bg-darkGreen hover:bg-darkBrown sm:mb-0 sm:mr-2 w-auto px-4 py-2 mb-2":
					isPrimary,
				"bg-darkBrown hover:bg-darkGreen sm:mb-0 sm:mr-2 w-auto px-4 py-2 mb-2":
					isSecondary,
			})}
		>
			<Link to="#">{children}</Link>
		</button>
	);
};
