import React, { useState } from "react"
import { motion } from "framer-motion"

const variants = {
  small: { fontSize: "1em" },
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
        padding: "0.5em",
        background: "white",
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
          left: ".5em",
          background: "white",
          color: "rebeccapurple",
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
          height: "100%",
          borderWidth: 0,
          paddingTop: "1.5em",
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
