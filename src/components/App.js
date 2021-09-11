import React from "react";
import Calculator from "../components/Calculator/Calculator";
import styled from "styled-components/macro";

const App = () => {
  return (
    <Container>
      <Calculator />
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`;
