import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import Image from "../components/image"
import Bubble from "../components/bubble"
import Responses from "../components/responses"
import Footer from "../components/footer"

import "./layout.css"
import { motion, AnimatePresence } from "framer-motion"

const Layout = ({ children, pageContext, location }) => {
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
      <SEO title={pageContext.frontmatter && pageContext.frontmatter.title} />
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
        <AnimatePresence exitBeforeEnter>
          <main
            key={location.pathname}
            style={{
              width: "100%",
              padding: "2em 1em",
            }}
          >
            <Bubble>{children}</Bubble>
            <Responses
              links={pageContext.frontmatter && pageContext.frontmatter.links}
            />
            {pageContext.frontmatter && pageContext.frontmatter.image && (
              <motion.div
                initial={{ opacity: 0, y: "10em" }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: "10em",
                }}
                transition={{
                  type: "tween",
                }}
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "10em",
                  zIndex: "-1",
                }}
              >
                <Image imageKey={pageContext.frontmatter.image} />
              </motion.div>
            )}
          </main>
        </AnimatePresence>
      </div>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
