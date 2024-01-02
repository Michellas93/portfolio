import { PropsWithChildren } from "react";
import cs from "classnames";
import { Title } from "./Title";

interface Props extends PropsWithChildren {
  title: string;
  type: "light" | "dark" | "green";
}

export const Section = ({ title, type, children }: Props) => {
  const isLight = type === "light";
  const green = type === "green";
  const dark = type === "dark";

  return (
    <div
      className={cs("", {
        "bg-whiteT": isLight,
        "bg-gradient-to-r from-darkGreen to-colorLightGreen": green,
        "bd-darkBrown": dark,
      })}
    >
      <Title title={title} />
      <div>{children}</div>
    </div>
  );
};
