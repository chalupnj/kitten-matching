import React, {useState, useEffect} from "react"

import {difficultyOptions} from "../../utils"

import './GameEnd.scss'

const GameEnd = ({leaderBoard, newHighScorePlace, score, setGamePlay}) => {
    const [leaderName, setLeaderName] = useState('')
    const [showEnterInitials, setShowEnterInitials] = useState(false)

    useEffect(() => {
        setShowEnterInitials(newHighScorePlace !== -1)
        console.log('newHighScorePlace', newHighScorePlace)
    }, [newHighScorePlace])

    const onChangeLeaderName = e => {
        setLeaderName(e.target.value)
    }
    const onSaveHighScore = () => {
        leaderBoard[newHighScorePlace].name = leaderName
        localStorage.setItem('highScores', JSON.stringify(leaderBoard))
        setShowEnterInitials(false)
    }

    return (
        <div>
            <h1>CONGRATULATIONS!! You won!</h1>
            <div className="GameEnd__score-caption">Final Score:</div>
            <div className="GameEnd__final-score-container">
                <span className="GameEnd__final-score-container__final-score">
                    {score}
                </span>
            </div>
            {showEnterInitials && (
                <div>
                    <div className="GameEnd__high-score">New high score!</div>
                    <div className="GameEnd__save-high-score">
                        <div className="GameEnd__save-high-score__initial-label">Enter your initials:</div>
                        <input maxlength="4" onChange={onChangeLeaderName}className="GameEnd__save-high-score__leaderboard-name" />
                        <button onClick={onSaveHighScore}>Save score</button>
                    </div>
                </div>
            )}
            <div>
                <button onClick={() => setGamePlay(false)}>Play Again</button>
            </div>
        </div>
    )
}

export default GameEnd