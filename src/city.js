import React from "react";
import ErrorHandler from "./ErrorHandler";

const City = ({ name }) => {
  try {
    return <div>Hello, visit {name.toUpperCase()}</div>;
  } catch (e) {
    return <ErrorHandler error={e} />;
  }
};

export default City;