import React from "react"

const GameStart = ({resetGame, score}) => {
    return (
        <div className="EndScreen">
            {!!score && <h1>Final Score: {score}</h1>}
            <button onClick={resetGame}>Play{!!score && "Again"}</button> 
        </div>
    )
}

export default GameStart