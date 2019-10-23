import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer
    style={{
      background: `rebeccapurple`,
      color: `white`,
      height: `100vh`,
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
