import React from "react"

import SEO from "../components/seo"
import Image from "../components/image"
import Bubble from "../components/bubble"

const IndexPage = () => (
  <>
    <SEO />
    <Bubble>
      <h1>Hi! I'm Luke.</h1>
      <p>
        I help people build adaptive products that real people actually want to
        use.
      </p>
      <p>Any questions?</p>
    </Bubble>
    <Bubble right link="/page-2/">
      Go to page 2
    </Bubble>
    <Bubble right link="/x">
      Go to 404
    </Bubble>
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "10em",
        zIndex: "-1",
      }}
    >
      <Image imageKey="astronaut" />
    </div>
  </>
)

export default IndexPage
