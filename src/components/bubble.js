import React from "react"
import { motion } from "framer-motion"

const Bubble = ({ children }) => {
  const foreground = "#000"
  const background = "#eee"
  const shadow = "#555"
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: "15em" }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: "-15em",
          transition: {
            type: "tween",
          },
        }}
        style={{
          position: "relative",
          background: background,
          color: foreground,
          borderRadius: `1em 1em 1em 0`,
          padding: `.5em`,
          marginBottom: "1em",
          boxShadow: `0 .25em 0 0 ${shadow}`,
        }}
      >
        {children}
        <div
          style={{
            position: "absolute",
            bottom: "-1em",
            width: 0,
            borderWidth: ".5em",
            borderStyle: "solid",
            borderColor: `${background} transparent transparent ${background}`,
            left: 0,
          }}
        />
      </motion.div>
    </div>
  )
}

export default Bubble
