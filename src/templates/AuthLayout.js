import React, { Fragment } from "react";
import Link from "react-router-dom/Link";

const AuthLayout = ({ children }) => (
  <Fragment>
    <div className="wrapper">
      <div className="row">
        <div className="d-flex align-items-center flex-column">
          {children}
        </div>
      </div>
    </div>
  </Fragment>
);

export default AuthLayout;
