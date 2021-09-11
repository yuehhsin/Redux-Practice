import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";

const Display = () => {
  const [displayNum, setDisplayNum] = useState();
  const resultNum = useSelector((state) => state.counter);
  const typeNum = useSelector((state) => state.typing);

  useEffect(() => {
    if (resultNum.toString().length > 13) {
      setDisplayNum("Error");
    } else {
      setDisplayNum(resultNum);
    }
  }, [resultNum]);

  return (
    <Container>
      <Monitor>
        <Number>{typeNum || displayNum}</Number>
      </Monitor>
      <Text>REDUX PRACTICE</Text>
    </Container>
  );
};

export default Display;

const Container = styled.div`
  background-color: #5e6265;
  height: 96px;
  width: 270px;
  border-radius: 8px;
  margin-bottom: 16px;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Monitor = styled.div`
  width: 250px;
  height: 60px;
  background: linear-gradient(180deg, #dbd2cb 0%, #c8c7b3 100%);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  position: relative;
`;

const Text = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 8px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #b7bbbc;
  margin-top: 8px;
`;

const Number = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 30px;
  position: absolute;
  right: 10px;
  top: 13px;
`;
