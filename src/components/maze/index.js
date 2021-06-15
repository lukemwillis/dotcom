import React, { useState, useEffect } from "react"
import Square from "./square"

const Maze = ({ start, finish, grid }) => {
    const [position, setPosition] = useState({ x: start.x, y: grid.length })
    const [origin, setOrigin] = useState('S')
    const [gameState, setGameState] = useState('ready')

    const isValidMove = (move) => {
        const current = grid[position.y][position.x]

        console.log({ current, origin, move })

        return (
            move !== origin &&
            current.arrows.includes(move) && (
                current.lines.includes(`${move}${origin}`) ||
                current.lines.includes(`${origin}${move}`)
            )
        )
    }

    const reducer = ({ key }) => {
        switch (key) {
            case 'ArrowUp':
                if (isValidMove('N')) {
                    setOrigin('S')
                    setPosition({ x: position.x, y: position.y - 1 })
                    if (position.x === finish.x && position.y === -1) {
                        setGameState('finished')
                    }
                }
                break
            case 'ArrowDown':
                if (isValidMove('S')) {
                    setOrigin('N')
                    setPosition({ x: position.x, y: position.y + 1 })
                }
                break
            case 'ArrowLeft':
                if (isValidMove('W')) {
                    setOrigin('E')
                    setPosition({ x: position.x - 1, y: position.y })
                }
                break
            case 'ArrowRight':
                if (isValidMove('E')) {
                    setOrigin('W')
                    setPosition({ x: position.x + 1, y: position.y })
                }
                break
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', reducer)

        return () => {
            window.removeEventListener('keydown', reducer)
        }
    })

    if (gameState === 'finished') {
        return <p>Congratulations!</p>
    }

    return (
        <div style={{
            height: '38em',
            display: 'grid',
            gridGap: '1em',
            gridTemplateColumns: `repeat(${grid[0].length}, 1fr)`,
            gridTemplateRows: `repeat(${grid.length + 2}, 1fr)`
        }}>
            {grid.map((row, rowIndex) => (
                row.map(({ arrows, lines }, columnIndex) => (
                    <Square key={`${columnIndex},${rowIndex}`} style={{ gridColumn: `${columnIndex + 1}`, gridRow: `${rowIndex + 2}` }} arrows={arrows} lines={lines} />
                ))
            ))}
            {gameState === 'In Progress' &&
                <svg style={{ display: 'block', gridColumn: `${position.x + 1}`, gridRow: `${position.y + 2}` }} width="100%" height="100%" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="25" fill="red" />
                </svg>
            }
            <div style={{
                gridColumn: `${start.x + 1}`,
                gridRow: `${grid.length + 2}`,
                textAlign: 'center'
            }}>
                {gameState === 'ready' && (
                    <button onClick={
                        () => {
                            setGameState('In Progress')
                            setPosition({ x: position.x, y: position.y - 1 })
                        }
                    }>START</button>
                )}
            </div>
            <div style={{
                gridColumn: `${finish.x + 1}`,
                gridRow: '1',
                textAlign: 'center'
            }}>
                {gameState === 'finished' ? (
                    <p>DONE!</p>
                ) : (
                    <p>GOAL</p>
                )}
            </div>
        </div>
    )
}

export default Maze
