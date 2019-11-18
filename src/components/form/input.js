import React from "react"
import GenericInput from "./genericInput"

const Input = ({ label, type, name, labelStyle, inputStyle }) => {
  return (
    <GenericInput
      InputComponent="input"
      label={label}
      name={name}
      labelStyle={labelStyle}
      inputStyle={inputStyle}
      inputProps={{ type }}
    />
  )
}

export default Input
