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
        links.map(({ text, link }, index) => (
          <Link
            key={index}
            to={link}
            style={{
              color: "white",
              marginLeft: `1em`,
              marginTop: `1em`,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: index * 0.01,
                },
              }}
              exit={{
                opacity: 0,
                y: -100,
              }}
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
              style={{
                background: "rebeccapurple",
                borderRadius: `1em`,
                padding: `.5em`,
                boxShadow: `0 .25em 0 0 #eee`,
              }}
            >
              {text}
            </motion.div>
          </Link>
        ))}
    </div>
  )
}

export default Responses
