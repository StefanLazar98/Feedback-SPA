import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ButtonGroup } from "@material-ui/core";
import Button from '@material-ui/core/Button';

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <div id='logout-button'>
      <ButtonGroup variant="text" color="primary">
        <Button
          onClick={() =>
            logout({
              returnTo: window.location.origin,
            })
          }
        >
          Delogare
        </Button>
      </ButtonGroup>
    </div>

  );
};

export default LogoutButton;