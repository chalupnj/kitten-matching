import React from "react"

import './Leaderboard.scss'

const Leaderboard = ({highScores}) => (
    <>
        <h3>Your High Scores</h3>
        <div className="Leaderboard__score-list">
            {highScores.map((row, index) => (
                <div
                    className="Leaderboard__score-row"
                    key={index}
                >
                    <span className="Leaderboard__place">{index + 1}</span>
                    <span className="Leaderboard__name">{row.name}</span>
                    <span className="Leaderboard__score">{row.score}</span>
                </div>
            ))}
        </div>
    </>   
)

export default Leaderboard   