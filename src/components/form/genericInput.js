import React, { useState } from "react"
import { motion } from "framer-motion"

const variants = {
  small: { fontSize: ".9em" },
  large: { fontSize: "1.5em" },
}

const GenericInput = ({
  InputComponent,
  label,
  name,
  required,
  labelStyle,
  inputStyle,
  inputProps,
}) => {
  const [focus, setFocus] = useState(false)
  const toggleFocus = () => setFocus(!focus)

  const [value, setValue] = useState("")
  const onChange = e => setValue(e.target.value)

  return (
    <label
      style={{
        position: "relative",
        padding: "1em",
        borderStyle: "solid",
        borderWidth: ".2em",
        borderColor: "white",
        borderRadius: "1em",
        display: "block",
        marginBottom: "1em",
        ...labelStyle,
      }}
    >
      <motion.div
        initial="large"
        animate={focus || value ? "small" : "large"}
        variants={variants}
        style={{
          pointerEvents: "none",
          position: "absolute",
          top: ".5em",
          fontWeight: "900",
        }}
      >
        {label}
      </motion.div>
      <InputComponent
        name={name}
        onFocus={toggleFocus}
        onBlur={toggleFocus}
        required={required}
        style={{
          width: "100%",
          border: "none",
          ...inputStyle,
        }}
        {...inputProps}
        value={value}
        onChange={onChange}
      ></InputComponent>
    </label>
  )
}

export default GenericInput
