import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import Navigation from "./Navigation";
import Social from "./Social";

const Container = styled.footer`
  width: 100vw;
  background: #333;
  color: #ddd;
`;

const Footer = () => (
  <Container>
    <Logo />
    <Navigation />
    <Social />
    <details>
      <summary>&copy; {new Date().getFullYear()}</summary>
      <p>by Luke Willis. All Rights Reserved.</p>
      <p>
        The opinions expressed herein are my own personal opinions and do not
        represent my employer’s view in any way.
      </p>
    </details>
  </Container>
);

export default Footer;
