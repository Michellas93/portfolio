import { ButtonLink } from "../ButtonLink";
import { ROUTES } from "../../routes";
import { Button } from "../Button";
import { logOut } from "../../firebase/utils";

export const AuthButtons = ({
  isUser,
  onClick,
}: {
  isUser: boolean;
  onClick: () => void;
}) => {
  if (isUser)
    return (
      <div className="flex justify-end space-x-3">
        <Button
          onClick={() => {
            logOut();
            onClick();
          }}
          variant="secondary"
        >
          Odhlásit
        </Button>
      </div>
    );

  return (
    <div className="flex justify-end space-x-3">
      <ButtonLink
        link={ROUTES.login()}
        onClickCallback={onClick}
        variant="primary"
      >
        Přihlásit
      </ButtonLink>
      <ButtonLink
        link={ROUTES.signup()}
        onClickCallback={onClick}
        variant="secondary"
      >
        Zaregistrovat
      </ButtonLink>
    </div>
  );
};
