import React from "react";
import styled from "styled-components/macro";
import Buttons from "./Buttons";
import Display from "./Display";

const Calculator = () => {
  return (
    <CalculatorScope>
      <Display />
      <Buttons />
    </CalculatorScope>
  );
};

export default Calculator;

const CalculatorScope = styled.div`
  padding: 15px;
  background: #dbdad6;
  border-radius: 5px;
`;
