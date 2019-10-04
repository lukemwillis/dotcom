import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import "./index.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Luke Willis" />
    <Header />
    <main>{children()}</main>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
