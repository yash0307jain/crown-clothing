import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  lessWidth,
  ...otherProps
}) => (
  <button
    className={`
      ${inverted ? "inverted" : ""} 
      ${isGoogleSignIn ? "google-sign-in" : ""} 
      ${lessWidth ? "lessWidth" : ""} 
      custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
