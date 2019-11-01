import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

const Bubble = ({ right = false, link = null, children }) => {
  const foreground = link ? "#fff" : "#000"
  const background = link ? "#555" : "#eee"
  const shadow = link ? "#eee" : "#555"
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: right ? "flex-end" : "flex-start",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -100,
        }}
        style={{
          position: "relative",
          background: background,
          color: foreground,
          borderRadius: `1em 1em ${right ? "0 1em" : "1em 0"}`,
          padding: `.5em`,
          marginBottom: "1em",
          boxShadow: `0 .25em 0 0 ${shadow}`,
        }}
      >
        {link ? (
          <Link style={{ color: foreground }} to={link}>
            {children}
          </Link>
        ) : (
          children
        )}
        <div
          style={{
            position: "absolute",
            bottom: "-.5em",
            width: 0,
            borderWidth: ".25em",
            borderStyle: "solid",
            borderColor: right
              ? `${background} ${background} transparent transparent`
              : `${background} transparent transparent ${background}`,
            ...(right ? { right: 0 } : { left: 0 }),
          }}
        />
      </motion.div>
    </div>
  )
}

export default Bubble
