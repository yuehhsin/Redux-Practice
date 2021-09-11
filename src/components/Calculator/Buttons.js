import React, { useState } from "react";
import styled from "styled-components/macro";
import { useDispatch } from "react-redux";
import { percentage, AC } from "../../actions/hotkey.js";
import { isTyping, typed } from "../../actions/isType.js";
import {
  add,
  subtract,
  multiply,
  divide,
  firstInput,
} from "../../actions/operator.js";

const Buttons = () => {
  const dispatch = useDispatch();
  const [executeNum, setExecuteNum] = useState("");
  const [operator, setOperator] = useState("");
  const [init, setInit] = useState(false);
  let initNumber = "";

  const handleInfo = (e) => {
    const Num = e.target.getAttribute("data-num");
    const Operator = e.target.getAttribute("data-opere");
    const hotkey = e.target.getAttribute("data-hotkey");

    if (Operator) {
      if (init) {
        setOperator(Operator);
      } else {
        setInit(true);
        setOperator(Operator);
      }
    } else if (Num) {
      if (init) {
        setExecuteNum(executeNum + Num);
        dispatch(isTyping(executeNum + Num));
      } else {
        initNumber += Num;
        dispatch(firstInput(Number(initNumber)));
      }
    } else if (hotkey) {
      switch (hotkey) {
        case "percentage":
          return dispatch(percentage());
        case "AC":
          initNumber = "";
          setInit(false);
          dispatch(typed());
          return dispatch(AC());
        default:
          return false;
      }
    }
  };

  const handleCal = () => {
    dispatch(typed());
    switch (operator) {
      case "add":
        dispatch(add(Number(executeNum)));
        return setExecuteNum("");
      case "subtract":
        dispatch(subtract(Number(executeNum)));
        return setExecuteNum("");
      case "multiply":
        dispatch(multiply(Number(executeNum)));
        return setExecuteNum("");
      case "divide":
        dispatch(divide(Number(executeNum)));
        return setExecuteNum("");
      default:
        return false;
    }
  };

  return (
    <Container onClick={handleInfo}>
      <ACBtn data-hotkey="AC">AC</ACBtn>
      <OperatorBtn data-hotkey="percentage">%</OperatorBtn>
      <OperatorBtn data-opere="divide">÷</OperatorBtn>
      <OperatorBtn data-opere="multiply">×</OperatorBtn>
      <NumBTN data-num="7">7</NumBTN>
      <NumBTN data-num="8">8</NumBTN>
      <NumBTN data-num="9">9</NumBTN>
      <SimpleOperator data-opere="subtract">－</SimpleOperator>
      <NumBTN data-num="4">4</NumBTN>
      <NumBTN data-num="5">5</NumBTN>
      <NumBTN data-num="6">6</NumBTN>
      <SimpleOperator data-opere="add">+</SimpleOperator>
      <NumBTN data-num="1">1</NumBTN>
      <NumBTN data-num="2">2</NumBTN>
      <NumBTN data-num="3">3</NumBTN>
      <Equal data-opere="=" onClick={handleCal}>
        =
      </Equal>
      <Zero data-num="0">0</Zero>
      <Dot data-num=".">.</Dot>
    </Container>
  );
};

export default Buttons;

const Container = styled.div`
  width: 270px;
  display: grid;
  grid-template-columns: repeat(4, 60px);
  grid-template-rows: repeat(5, 48px);
  gap: 10px;
`;

const Equal = styled.button`
  border: none;
  height: 106px;
  background: linear-gradient(180deg, #f3963f 0%, #f6791f 100%);
  box-shadow: 2px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: #fff;
  font-size: 25px;
  &:active {
    box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.25);
  }
`;

const Zero = styled.button`
  width: 130px;
  border: none;
  background: linear-gradient(180deg, #f8f9f4 0%, #f1eee9 100%);
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: #575652;
  font-size: 15px;
  font-weight: bold;
  &:active {
    box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.25);
  }
`;

const Dot = styled.button`
  grid-column: 3;
  border: none;
  background: linear-gradient(180deg, #f8f9f4 0%, #f1eee9 100%);
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: #575652;
  font-size: 15px;
  font-weight: bold;
  &:active {
    box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.25);
  }
`;

const NumBTN = styled.button`
  border: none;
  background: linear-gradient(180deg, #f8f9f4 0%, #f1eee9 100%);
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: #575652;
  font-size: 15px;
  font-weight: bold;
  &:active {
    box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.25);
  }
`;

const SimpleOperator = styled.button`
  border: none;
  background: linear-gradient(180deg, #999fa2 0%, #818a91 100%);
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  &:active {
    box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.25);
  }
`;

const ACBtn = styled.button`
  border: none;
  background: linear-gradient(180deg, #f3963f 0%, #f6791f 100%);
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  &:active {
    box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.25);
  }
`;

const OperatorBtn = styled.button`
  border: none;
  background: linear-gradient(180deg, #4c4d48 0%, #3a3a38 100%);
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  &:active {
    box-shadow: inset 3px 3px 2px rgba(0, 0, 0, 0.25);
  }
`;
