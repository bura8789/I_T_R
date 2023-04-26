import React, { Component, useEffect, useState } from "react";
import styled from "styled-components";
import ZB from "../Components/brand.webp";

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 670px;
  justify-content: center;
  align-items: flex-start;
  border: none;
  flex-direction: column;
`;
const Name = styled("div")`
  margin: 20px;
  margin-top: 20px;
  margin-left: 100px;
`;
const Surname = styled("div")`
  margin: 20px;
  margin-top: 0px;
  margin-left: 100px;
`;
const Old = styled("div")`
  margin-left: 100px;
`;
const Button = styled("button")`
  width: 200px;
  height: 50px;
  background-color: #908d8d;
  border: none;
  border-radius: 5px;
  color: white;
  text-align: center;
  margin-top: 20px;
  margin-left: 100px;
  :hover {
    background-color: #777474;
  }
`;
const Image = styled("img")`
  width: 200px;
  height: 120px;
  margin-left: 20px;
  border-radius: 50px;
  background-image: url(${ZB});
  background-size: 100% 100%;
  margin-left: 100px;
`;
const Image1 = styled("img")`
  width: 700px;
  height: 500px;
`;
const Div = styled("div")``;

const Document = () => {
  return (
    <Container>
      <Div>
        <Image></Image>
        <Name>
          <input placeholder="Email adress"></input>
        </Name>
        <Surname>
          <input type="password" id="parol" placeholder="Password"></input>
        </Surname>
        <Old>
          <input type="checkbox" id="agree" />
          <label for="agree">Remember me</label>
        </Old>
        <Button>Sign in</Button>
      </Div>
      <Image1 src="https://avatars.mds.yandex.net/i?id=c7c749afca587ed6ac4ddc7316b8f0b0bb16d0cb-8497822-images-thumbs&n=13"></Image1>
    </Container>
  );
};

export default Document;
