import React from "react"

import Form from "./form"
import Submit from "./form/submit"
import EmailInput from "./form/emailInput"
import Textarea from "./form/textarea"

const Contact = () => (
  <Form
    name="contact"
    style={{
      display: "grid",
      gridGap: "0.5em",
      gridTemplate: '"message message" auto\n"email submit" auto / auto 8em',
    }}
  >
    <Textarea
      label="Message"
      name="message"
      required
      labelStyle={{ gridArea: "message", borderRadius: "1em 1em 0 0" }}
      inputStyle={{ height: "10em" }}
    />
    <EmailInput
      label="Your Email"
      name="email"
      required
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
