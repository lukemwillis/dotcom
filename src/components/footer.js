import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Contact from "./contact"
import SocialIcons from "./socialIcons"

const Footer = ({ siteTitle }) => (
  <footer
    style={{
      background: `rebeccapurple`,
      color: `white`,
      height: "100vh",
      position: `sticky`,
      bottom: "calc(1em - 100vh)",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: "40em",
        padding: "1em",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <SocialIcons />
      </div>
      <Contact />
      <p>
        The opinions expressed herein are my own personal opinions and do not
        represent my employer's view in any way.
      </p>
      <p>© {new Date().getFullYear()}, Luke Willis</p>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
