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
      borderWidth: 0,
      padding: ".5em",
      color: "rebeccapurple",
      fontWeight: "900",
      backgroundColor: "white",
      ...style,
    }}
  >
    {children}
  </motion.button>
)

export default Submit
