import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

const Responses = ({ links = null }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        flexWrap: "wrap",
        marginLeft: "10em",
      }}
    >
      {links &&
        links.map(({ text, link }) => (
          <Link
            key={link}
            to={link}
            style={{
              color: "white",
              marginLeft: `1em`,
              marginTop: `1em`,
            }}
          >
            <motion.span
              whileHover={{
                scale: 1.5,
              }}
              style={{
                background: "rebeccapurple",
                borderRadius: `1em`,
                padding: `.5em`,
                boxShadow: `0 .25em 0 0 #eee`,
              }}
            >
              {text}
            </motion.span>
          </Link>
        ))}
    </div>
  )
}

export default Responses
