import { hover } from "@testing-library/user-event/dist/hover";
import React, { Component } from "react";
import styled from "styled-components";
import Motorbike from "../Components/Motorbike";

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
  background-color: #c6d0d3;
`;

const Bike = () => {
  return (
    <Container>
      <Motorbike />
    </Container>
  );
};

export default Bike;
