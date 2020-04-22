import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import SEO from "../components/seo"
import SocialIcons from "../components/socialIcons"
import Container from "../components/container"

import "./layout.css"

const Layout = ({ children, pageContext }) => {
  return (
    <>
      <SEO title={pageContext.frontmatter && pageContext.frontmatter.title} />
      <main style={{ minHeight: "100vh" }}>
        <Container style={{ paddingTop: "10vh" }}>{children}</Container>
      </main>
      <nav
        style={{
          background: "#272727",
          position: `sticky`,
          bottom: "0",
        }}
      >
        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link
            to="/"
          >
            Home
          </Link>
          <Link
            to="/press"
          >
            Press Info
          </Link>
          <Link
            to="/paid"
          >
            Paid Stuff
          </Link>
          <Link
            to="/free"
          >
            Free Stuff
          </Link>
        </Container>
      </nav>
      <footer
        style={{
          background: `#272727`,
        }}
      >
        <Container style={{ paddingTop: "0" }}>
          <p>
            The opinions expressed herein are my own personal opinions and do
            not represent my employer's view in any way.
          </p>
          <div
            style={{
              paddingBottom: "1rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p>© {new Date().getFullYear()}, Luke Willis</p> <SocialIcons />
          </div>
          <p style={{ textAlign: "center" }}>👋</p>
        </Container>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
