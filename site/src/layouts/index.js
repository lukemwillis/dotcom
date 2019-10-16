import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";

import "./index.css";

import Footer from "../components/Footer";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 70ch 1fr;
`;

const Main = styled.main`
  grid-column: 2 / -2;
`;

const TemplateWrapper = ({ children }) => (
  <Container>
    <div>
      <Helmet titleTemplate="%s - Luke Willis" defaultTitle="Luke Willis" />
      <Main>{children()}</Main>
      <Footer />
    </div>
  </Container>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
