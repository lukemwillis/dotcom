import React, { useState } from "react"

const getArrowSvg = (direction) => ({
    N: <polygon key="N" points="50,5 40,15 60,15" />,
    W: <polygon key="W" points="5,50 15,40 15,60" />,
    S: <polygon key="S" points="50,95 40,85 60,85" />,
    E: <polygon key="E" points="95,50 85,40 85,60" />
}[direction])

const getLineSvg = (directions) => ({
    NW: <path key="NW" d="M50 10Q50 50, 10 50" />,
    SW: <path key="SW" d="M10 50Q50 50, 50 90" />,
    SE: <path key="SE" d="M50 90Q50 50, 90 50" />,
    NE: <path key="NE" d="M90 50Q50 50, 50 10" />,
    NS: <path key="NS" d="M50 10V90" />,
    EW: <path key="EW" d="M10 50H90" />,
}[directions])

const Square = ({ arrows, lines, style }) => {
    return (
        <svg style={{ display: 'block', backgroundColor: 'white', ...style }} width="100%" height="100%" viewBox="0 0 100 100">
            <g stroke="#000" strokeWidth="2" fill="none">
                {lines.map(getLineSvg)}
            </g>
            <g fill="#000">
                {arrows.map(getArrowSvg)}
            </g>
        </svg>
    )
}

export default Square
