import { hover } from "@testing-library/user-event/dist/hover";
import React, { Component } from "react";
import styled from "styled-components";
import Cars from "../Components/Cars";

const Image = styled("img")`
  margin: 5px 5px 5px 5px;
  width: 350px;
  height: 220px;
`;
const Image1 = styled("img")`
  margin: 5px 5px 10px 15px;
  width: 390px;
  height: 220px;
`;

const Card = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 30px;
  transition: all 0.3s;

  :hover {
    transform: scale(103%, 103%);
  }
`;
const Card1 = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Div = styled("div")`
  display: flex;
  flex-direction: column;
`;
const Text = styled("Text")`
  text-transform: capitalize;
  justify-content: start;
  margin-left: 5px;
`;
const Button = styled("button")`
  width: 100px;
  height: 50px;
  :hover {
    background-color: #ffc451;
    color: white;
  }
  background-color: #ffc451;
  color: black;
  border-radius: 20px;
  border: none;
  margin-left: 140px;
`;
const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;
const Text1 = styled("tex")`
  text-align: center;
  display: flex;
`;

const About = () => {
  return (
    <Container>
      <Cars />
    </Container>
  );
};

export default About;
