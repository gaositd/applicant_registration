import React, { Fragment } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LogOut = () =>{
  const { logout } = useAuth0();
  
  return(
    <Fragment>
      <button
        className="btn btn-outline-secondary mb-4"
        onClick={() => logout({returnTo: window.location.origin }) }
      >
        Log Out
      </button>
    </Fragment>
  );
}