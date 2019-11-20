import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { FaStackOverflow, FaLinkedinIn } from "react-icons/fa"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const SocialIcons = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            linkedinUsername
            stackOverflowUserId
          }
        }
      }
    `
  )
  return (
    <div>
      <OutboundLink
        href={`https://linkedin.com/in/${siteMetadata.linkedinUsername}`}
        style={{ color: "white" }}
      >
        <FaLinkedinIn size="2.25rem" />
      </OutboundLink>
      <OutboundLink
        href={`https://stackoverflow.com/users/story/${siteMetadata.stackOverflowUserId}`}
        style={{ marginLeft: "0.5em", color: "white" }}
      >
        <FaStackOverflow size="2.25rem" />
      </OutboundLink>
    </div>
  )
}

export default SocialIcons
