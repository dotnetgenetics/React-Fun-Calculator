import React, { useState } from "react";
import "./Calculator.css";
import CalcDisplay from "./CalcDisplay";
import CalcButton from "./CalcButton";

const Calculator = () => {
  const [state, setState] = useState({
    operand1: "0",
    operand2: "0",
    calcFn: "",
    initial: true
  });

  const updateOperand = (value) => {
    let newVal = value;
    let currState = { ...state };

    if (!currState.initial) {
      newVal = currState.operand1 + value;
    }

    currState.operand1 = newVal;
    currState.initial = false;

    console.log(state);
    setState((prevState) => ({ ...prevState, ...currState }));
  };

  const doDivision = () => {
    let currState = state;
    currState.operand1 =
      parseInt(currState.operand2) / parseInt(currState.operand1);
    currState.initial = true;
    setState((prevState) => ({ ...prevState, ...currState }));
  };

  const doMultiply = () => {
    let currState = { ...state };
    currState.operand1 =
      parseInt(currState.operand2) * parseInt(currState.operand1);
    currState.initial = true;
    setState((prevState) => ({ ...prevState, ...currState }));
  };

  const doSubtract = () => {
    let currState = { ...state };
    currState.operand1 =
      parseInt(currState.operand2) - parseInt(currState.operand1);
    currState.initial = true;
    setState((prevState) => ({ ...prevState, ...currState }));
  };

  const doAddition = () => {
    let currState = { ...state };
    currState.operand1 =
      parseInt(currState.operand2) + parseInt(currState.operand1);
    currState.initial = true;
    setState((prevState) => ({ ...prevState, ...currState }));
  };

  const doCalculate = () => {
    let currState = { ...state };
    if (currState.calcFn === "+") {
      doAddition();
    } else if (currState.calcFn === "-") {
      doSubtract();
    } else if (currState.calcFn === "/") {
      doDivision();
    } else {
      doMultiply();
    }
  };

  const doClear = () => {
    setState({
      operand1: "0",
      operand2: "0",
      calcFn: "",
      initial: true
    });
  };

  const prepCalc = (value) => {
    let currState = {
      operand2: state.operand1,
      calcFn: value,
      initial: true
    };
    setState((prevState) => ({ ...prevState, ...currState }));
  };

  const showResult = () => {
    let currState = { ...state };
    return currState.operand1;
  };

  return (
    <>
      <div className="calculator">
        <CalcDisplay displayNumber={showResult()} />
        <div>
          <CalcButton value="1" handleClick={updateOperand} />
          <CalcButton value="2" handleClick={updateOperand} />
          <CalcButton value="3" handleClick={updateOperand} />
          <CalcButton value="/" handleClick={prepCalc} />
        </div>
        <div>
          <CalcButton value="4" handleClick={updateOperand} />
          <CalcButton value="5" handleClick={updateOperand} />
          <CalcButton value="6" handleClick={updateOperand} />
          <CalcButton value="*" handleClick={prepCalc} />
        </div>
        <div>
          <CalcButton value="7" handleClick={updateOperand} />
          <CalcButton value="8" handleClick={updateOperand} />
          <CalcButton value="9" handleClick={updateOperand} />
          <CalcButton value="-" handleClick={prepCalc} />
        </div>
        <div>
          <CalcButton value="C" handleClick={doClear} />
          <CalcButton value="0" handleClick={updateOperand} />
          <CalcButton value="=" handleClick={doCalculate} />
          <CalcButton value="+" handleClick={prepCalc} />
        </div>
      </div>
    </>
  );
};

export default Calculator;
