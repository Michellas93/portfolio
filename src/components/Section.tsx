import { PropsWithChildren } from "react";
import cs from "classnames";
import { Title } from "./Title";

interface Props extends PropsWithChildren {
  title: string;
  type: "light" | "dark" | "green";
}

export const Section = ({ title, type, children }: Props) => {
  const isLight = type === "light";
  const isGreen = type === "green";

  return (
    <div
      className={cs("", {
        "bg-whiteT": isLight,
        "bg-darkBrown ": !isLight,
        "bg-gradient-to-r from-darkGreen to-colorLightGreen": isGreen,
      })}
    >
      <Title title={title} />
      <div>{children}</div>
    </div>
  );
};
