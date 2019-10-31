import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ imageKey }) => {
  const data = useStaticQuery(graphql`
    query {
      astronaut: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log(imageKey)

  return <Img fluid={data[imageKey].childImageSharp.fluid} />
}

export default Image
