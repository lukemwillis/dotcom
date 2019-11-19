import React from "react"
import GenericInput from "./genericInput"

const Textarea = ({ label, name, required, labelStyle, inputStyle }) => {
  return (
    <GenericInput
      InputComponent="textarea"
      label={label}
      name={name}
      required={required}
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
