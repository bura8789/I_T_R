import React, { Component } from "react";
import styled from "styled-components";
import Trucks from "../Components/Treucks";

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;
const Contacts = () => {
  return (
    <Container>
      <Trucks />
    </Container>
  );
};

export default Contacts;
