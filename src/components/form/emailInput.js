import React from "react"
import GenericInput from "./genericInput"

const Input = ({ label, name, required, labelStyle, inputStyle }) => {
  return (
    <GenericInput
      InputComponent="input"
      label={label}
      name={name}
      required={required}
      labelStyle={labelStyle}
      inputStyle={inputStyle}
      inputProps={{ type: "email" }}
    />
  )
}

export default Input
