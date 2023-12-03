import { Button } from "../Button";
import cs from "classnames";
import { Spinner } from "../Spinner";

export const SubmitButton = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <Button
      disabled={isLoading}
      type="submit"
      className={cs(
        "w-full text-white p-2 hover:border-2 border-neutral-50 rounded-3xl",
        {
          "bg-darkGreen": !isLoading,
          "bg-grey": isLoading,
        }
      )}
    >
      <span>Submit </span>
      {isLoading && <Spinner />}
    </Button>
  );
};
