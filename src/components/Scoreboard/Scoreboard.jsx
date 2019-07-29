import React from "react"

const Scoreboard = ({score}) => {
    return (
        <div className="Scoreboard">
            <h2>Flip the cards to match the cats.</h2>
            <h1>Score: {score}</h1>
        </div>
    )
}

export default Scoreboard   