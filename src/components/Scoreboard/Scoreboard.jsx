import React from "react"

import './Scoreboard.scss'

const Scoreboard = ({score}) => {
    return (
        <div className="Scoreboard">
            <h2>Flip the cards to match the cats</h2>
            <h3>Score: {score}</h3>
        </div>
    )
}

export default Scoreboard   