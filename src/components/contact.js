import React from "react"

import Form from "./form"
import Submit from "./form/submit"
import Input from "./form/input"
import Textarea from "./form/textarea"

const Contact = () => (
  <Form
    style={{
      display: "grid",
      gridGap: "0.5em",
      gridTemplate: '"message message" 1fr\n"email submit" auto / 1fr 10em',
    }}
  >
    <Textarea
      label="Message"
      name="message"
      labelStyle={{ gridArea: "message", borderRadius: "1em 1em 0 0" }}
    />
    <Input
      label="Your Email"
      type="email"
      name="email"
      labelStyle={{ gridArea: "email", borderRadius: "0 0 0 1em" }}
    />
    <Submit
      style={{
        gridArea: "submit",
        borderRadius: "0 0 1em 0",
        fontSize: "1.5em",
      }}
    >
      Send
    </Submit>
  </Form>
)

export default Contact
