import React, { Component } from "react";
import styled from "styled-components";
import {
  Navbar,
  Nav,
  FormControl,
  Container,
  NavbarBrand,
  Form,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const MyLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  margin-left: 20px;
  :hover {
    color: red;
  }
`;
const Header = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="secondary" variant="white">
      <Container>
        <NavbarBrand>
          <img />
        </NavbarBrand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav
          className="mr-auto"
          style={{
            color: "white",
            width: "500px",
            display: "flex",
            justifyContent: "space-between",
            marginRight: "500px",
          }}
        >
          <MyLink to="/">
            <img
              width={30}
              height={30}
              style={{
                borderRadius: 5,
              }}
              src="https://cdn.vectorstock.com/i/preview-1x/60/35/alphabet-initials-logo-bz-zb-z-and-b-vector-37926035.webp"
            />
          </MyLink>
          <MyLink to="/about">Cars</MyLink>
          <MyLink to="/contacts">Trucks</MyLink>
          <MyLink to="/blog">Bus</MyLink>
          <MyLink to="/bike">Motorbike</MyLink>
          <MyLink to="/inomark">Inomarck</MyLink>
          <MyLink to="/yaxti">Yacht</MyLink>
          <MyLink to="/document">Login </MyLink>
        </Nav>
        <Form inline style={{ display: "flex" }}>
          <FormControl type="text" placeholder="Search" className="mr-sn-2" />
          <Button
            variant="Outline-info"
            style={{ background: "grey", marginLeft: "10px" }}
          >
            Search
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default Header;
