import React from "react"
import { motion } from "framer-motion"

const Submit = ({ children, style }) => (
  <motion.button
    type="submit"
    whileHover={{
      scale: 1.1,
    }}
    whileTap={{
      scale: 0.9,
    }}
    style={{
      borderWidth: ".2em",
      borderColor: "white",
      borderRadius: "1em",
      padding: ".5em",
      fontWeight: "900",
      backgroundColor: "#121212",
      color: "white",
      ...style,
    }}
  >
    {children}
  </motion.button>
)

export default Submit
