import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { FaStackOverflow, FaLinkedinIn, FaTwitter } from "react-icons/fa"
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
      >
        <FaLinkedinIn size="1.5rem" />
      </OutboundLink>
      <OutboundLink
        href={`https://stackoverflow.com/users/story/${siteMetadata.stackOverflowUserId}`}
        style={{ marginLeft: "0.5em" }}
      >
        <FaStackOverflow size="1.5rem" />
      </OutboundLink>
      <OutboundLink
        href={`https://twitter.com/${siteMetadata.twitterUsername}`}
        style={{ marginLeft: "0.5em" }}
      >
        <FaTwitter size="1.5rem" />
      </OutboundLink>
    </div>
  )
}

export default SocialIcons
