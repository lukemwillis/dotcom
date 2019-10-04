import React from 'react'
import Link from 'gatsby-link'

const Navigation = () => (
  <nav>
    <Link to="/about">
      About
    </Link>
    <Link to="/products">
      Products
    </Link>
  </nav>
)

export default Navigation
