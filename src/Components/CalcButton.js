import React from "react";

const CalcButton = ({ value, handleClick }) => {
  return (
    <>
      <div className="calcButton" onClick={() => handleClick(value)}>
        {value}
      </div>
    </>
  );
};

export default CalcButton;
