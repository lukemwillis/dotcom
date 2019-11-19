import React from "react"

const Form = ({ children, style }) => (
  <form
    name="contact"
    method="POST"
    netlify-honeypot="bot-field"
    data-netlify="true"
    action="/thanks"
    style={{
      width: "100%",
      margin: "1rem 0",
      ...style,
    }}
  >
    <input type="hidden" name="bot-field" />
    {children}
  </form>
)

export default Form
