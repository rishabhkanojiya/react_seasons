import React from "react";

const Spinner = () => {
  return (
    <div class="d-flex justify-content-center">
      <div class="spinner-grow text-primary" role="status" />
    </div>
  );
};

/**
|--------------------------------------------------
| Default Props
Spinner.defaultProps = {
  message: "Loading"
};

|--------------------------------------------------
*/

export default Spinner;
