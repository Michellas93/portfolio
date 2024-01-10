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
        "rounded-xl w-auto px-2 sm:px-4 py-1 disabled:bg-gray-400 disabled:hover:bg-gray-400",
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
