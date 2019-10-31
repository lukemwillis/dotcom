import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Image from "../components/image"
import Bubble from "../components/bubble"
import Footer from "../components/footer"
import "./layout.css"

const Layout = ({
  children,
  pageContext: {
    frontmatter: { title, image, links },
  },
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: "40em",
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <main
          style={{
            width: "100%",
            padding: "2em 1em",
          }}
        >
          <SEO title={title} />
          <Bubble>{children}</Bubble>
          {links &&
            links.map(({ text, link }) => (
              <Bubble key={link} right link={link}>
                {text}
              </Bubble>
            ))}
          {image && (
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "10em",
                zIndex: "-1",
              }}
            >
              <Image imageKey={image} />
            </div>
          )}
        </main>
      </div>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
