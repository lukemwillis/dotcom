import React from "react"

import Form from "./form"
import Submit from "./form/submit"
import EmailInput from "./form/emailInput"

const Subscribe = () => (
  <Form
    name="subscribe"
  >
    <EmailInput
      label="Your Email"
      name="email"
      required
    />
    <Submit
      style={{
        fontSize: "1.5em",
      }}
    >
      Join the waitlist!
    </Submit>
  </Form>
)

export default Subscribe
