import { ButtonHTMLAttributes } from "react";
import cs from "classnames";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
}

export const Button = ({
  children,
  className,
  variant = "primary",
  ...rest
}: ButtonProps) => {
  const isPrimary = variant === "primary";
  const isSecondary = variant === "secondary";
  const isTertiary = variant === "tertiary";

  return (
    <button
      {...rest}
      className={cs(
        className,
        "pt-1 pb-1 rounded-xl m-1 sm:mb-0 sm:mr-2 w-auto px-4 py-2 mb-2 disabled:bg-gray-400 disabled:hover:bg-gray-400",
        {
          "bg-darkGreen hover:bg-darkBrown border-2": isPrimary,
          "bg-darkBrown hover:bg-darkGreen border-2": isSecondary,
          "border-0": isTertiary,
        }
      )}
    >
      {children}
    </button>
  );
};
