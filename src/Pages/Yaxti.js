import React, { Component } from "react";
import styled from "styled-components";
import Yacht from "../Components/Yacht";

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
  background-color: #c6d0d3;
`;

const Yaxti = () => {
  return (
    <Container>
      <Yacht />
    </Container>
  );
};

export default Yaxti;
