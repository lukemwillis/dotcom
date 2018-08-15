import React from 'react'
import Link from 'gatsby-link'

import logo from '../img/logo.svg'

const Navigation = () => (
  <nav>
    <Link to="/">
      <figure className="image">
        <img src={logo} alt="Luke M. Willis" />
      </figure>
    </Link>
    <Link to="/about">
      About
    </Link>
    <Link to="/products">
      Products
    </Link>
  </nav>
)

export default Navigation
