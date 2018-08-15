import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navigation from '../components/Navigation'

const TemplateWrapper = ({ children }) => (
  <>
    <Helmet title="Luke M. Willis" />
    <Navigation />
    <main>{children()}</main>
  </>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
