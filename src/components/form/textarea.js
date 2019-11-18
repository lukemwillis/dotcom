import React from "react"
import GenericInput from "./genericInput"

const Textarea = ({ label, name, labelStyle, inputStyle }) => {
  return (
    <GenericInput
      InputComponent="textarea"
      label={label}
      name={name}
      labelStyle={labelStyle}
      inputStyle={{
        verticalAlign: "top",
        resize: "none",
        overflow: "auto",
        ...inputStyle,
      }}
    />
  )
}

export default Textarea
