import React from "react";

import LoginButton from "./LoginButton.component";
import LogoutButton from "./LogoutButton.component";

import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();
  

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;