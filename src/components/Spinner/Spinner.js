import React from "react";
import spinner from "../../images/spinner.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img src={spinner} alt="loading..." />
    </div>
  );
};

export default Spinner;
