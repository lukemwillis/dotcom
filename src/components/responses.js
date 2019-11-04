import React, { Component } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

class Responses extends Component {
  state = {
    clicked: null,
  }

  onLinkClick = e => {
    this.setState({ clicked: e.target.innerText })
  }

  render() {
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
        {this.props.links &&
          this.props.links.map(({ text, link }, index) => (
            <Link
              key={index}
              to={link}
              style={{
                color: "white",
                marginLeft: `1em`,
                marginTop: `1em`,
              }}
              onClick={this.onLinkClick}
            >
              <motion.div
                initial={{ opacity: 0, y: "10em" }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: (index + 1) * 0.01,
                  },
                }}
                exit={{
                  opacity: 0,
                  y: this.state.clicked === text ? "-10em" : "10em",
                  transition: {
                    type: "tween",
                  },
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
}

export default Responses
