import { Button } from "../Button";
import cs from "classnames";
import { Spinner } from "../Spinner";

export const SubmitButton = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <Button
      disabled={isLoading}
      type="submit"
      className={cs(
        "w-full text-white hover:border-2 mt-2 border-neutral-50 rounded-3xl",
        {
          "bg-darkGreen": !isLoading,
          "bg-grey": isLoading,
        }
      )}
    >
      <div className="flex flex-row justify-center items-center relative">
        <span>Submit</span>
        <span className="absolute end-0">{isLoading && <Spinner />}</span>
      </div>
    </Button>
  );
};
