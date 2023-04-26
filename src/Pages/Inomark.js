import React, { Component } from "react";
import styled from "styled-components";
import Inomarck from "../Components/Inomarck";

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
  background-color: #c6d0d3;
`;

const Inomarki = () => {
  return (
    <Container>
      <Inomarck />
    </Container>
  );
};

export default Inomarki;
