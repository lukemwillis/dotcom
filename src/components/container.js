import React from "react"

const Container = ({ children, style }) => (
  <div
    style={{
      margin: "0 auto",
      maxWidth: "40em",
      padding: "1em",
      ...style,
    }}
  >
    {children}
  </div>
)

export default Container
