import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ filename }) => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
  `)

  const image = data.allImageSharp.nodes.find(
    node => node.fluid.originalName === filename
  )

  return image && <Img fluid={image.fluid} alt={filename} />
}

export default Image
