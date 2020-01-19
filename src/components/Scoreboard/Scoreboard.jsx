import React from "react"

import './Scoreboard.scss'

const Scoreboard = ({score}) => {
    return (
        <div className="Scoreboard">
            <div className="Scoreboard__subtitle">Flip the cards to match the cats</div>
            <div className="Scoreboard__score-display">Score: {score}</div>
        </div>
    )
}

export default Scoreboard   