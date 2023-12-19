import { PropsWithChildren } from "react";
import cs from "classnames";
import { Title } from "./Title";

interface Props extends PropsWithChildren {
  title: string;
  type: "light" | "dark";
}

export const Section = ({ title, type, children }: Props) => {
  const isLight = type === "light";

  return (
    <div
      className={cs("", {
        "bg-whiteT": isLight,
        "bg-darkBrown ": !isLight,
      })}
    >
      <Title title={title} />
      <div>{children}</div>
    </div>
  );
};
