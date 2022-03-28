import React from "react";
import ErrorHandler from "./ErrorHandler";

const Country = ({capital}) => {
  try {
    return <div>Hello, visit {capital.toUpperCase()}</div>;
  } catch (e) {
    return <ErrorHandler error={e} />;
  }
};

export default Country;
