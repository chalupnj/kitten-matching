import React from "react"

import './GameStart.scss'

const GameStart = ({resetGame, score}) => {
    return (
        <div className="EndScreen">
            {score ? 
            <div>
            <h1>CONGRATULATIONS!! You won!</h1>
            <h2>Final Score: {score}</h2>
            </div>
            : 
            <div>
                <h1>Kitten Matching Game</h1>
                <h2>A feline friendly game made with React</h2>
            </div>}
            <button onClick={resetGame}>Play{!!score && " Again"}</button> 
        </div>
    )
}

export default GameStart