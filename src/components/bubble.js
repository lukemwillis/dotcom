import React from "react"
import { Link } from "gatsby"

const Bubble = ({ right = false, link = null, children }) => {
  const foreground = link ? "#fff" : "#000"
  const background = link ? "#555" : "#eee"
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: right ? "flex-end" : "flex-start",
      }}
    >
      <div
        style={{
          position: `relative`,
          background: background,
          color: foreground,
          borderRadius: `1em 1em ${right ? "0 1em" : "1em 0"}`,
          padding: `.5em`,
          marginBottom: "1em",
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
            bottom: "-1em",
            width: 0,
            borderWidth: ".5em",
            borderStyle: "solid",
            borderColor: right
              ? `${background} ${background} transparent transparent`
              : `${background} transparent transparent ${background}`,
            ...(right ? { right: 0 } : { left: 0 }),
          }}
        />
      </div>
    </div>
  )
}

export default Bubble
