import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import Bubble from "../components/bubble"

const IndexPage = () => (
  <Layout image={<Image />}>
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
  </Layout>
)

export default IndexPage
