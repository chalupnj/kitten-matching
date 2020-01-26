import React, {useState, useEffect} from "react"

import {difficultyOptions} from "../../utils"

import './GameEnd.scss'

const GameEnd = ({resetGame, score}) => {

    const [leaderName, setLeaderName] = useState('')
    const highScores = JSON.parse(localStorage.getItem('highScores')) || []
    console.log('highScores', highScores)
    console.log('new score', {score})
    if (score > 0) highScores.push({score})
    const leaderBoard = highScores.sort((a,b) => b.score - a.score)
    if (leaderBoard.length === 11) leaderBoard.splice(-1)
    console.log('leaderBoard', leaderBoard)
    const newHighScorePlace = leaderBoard.findIndex(leader => !leader.name)
    console.log('newHighScorePlace', newHighScorePlace)

    const onChangeLeaderName = e => {
        setLeaderName(e.target.value)
    }
    const onSaveHighScore = () => {
        leaderBoard[newHighScorePlace].name = leaderName
        localStorage.setItem('highScores', JSON.stringify(leaderBoard))
    }

    return (
        <div>
            <div className="GameStart__main-title">CONGRATULATIONS!! You won!</div>
            <div className="GameStart__score-caption">Final Score:</div>
            <div className="GameStart__final-score-container">
                <span className="GameStart__final-score-container__final-score">
                    {score}
                </span>
            </div>
            {newHighScorePlace !== -1 && (
                <div>
                    <div className="GameStart__high-score">New high score!</div>
                    <div className="GameStart__save-high-score">
                        <div className="GameStart__save-high-score__initial-label">Enter your initials:</div>
                        <input onChange={onChangeLeaderName}className="GameStart__save-high-score__leaderboard-name" />
                        <button onClick={onSaveHighScore}>Save score</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default GameEnd