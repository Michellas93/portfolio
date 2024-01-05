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
  const isDark = type === "dark";

  return (
    <div
      className={cs("rounded-xl ", {
        "bg-whiteT": isLight,
        "bg-gradient-to-r from-darkGreen to-colorLightGreen": isGreen,
        "bg-darkBrown": isDark,
      })}
    >
      <Title title={title} />
      <div>{children}</div>
    </div>
  );
};
