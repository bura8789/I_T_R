import { hover } from "@testing-library/user-event/dist/hover";
import React, { Component } from "react";
import styled from "styled-components";
import Bus from "../Components/Bus";

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
  background-color: #c6d0d3;
`;

const Blog = () => {
  return (
    <Container>
      <Bus />
    </Container>
  );
};

export default Blog;
