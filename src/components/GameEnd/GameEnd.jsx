import React, {useState, useEffect} from "react"

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
        setGamePlay(false)
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
                        <div className="GameEnd__save-high-score__initial-container">
                            <label htmlFor="initial-input">Enter your name:</label>
                            <input 
                                autoFocus="autofocus"
                                id="initial-input" 
                                maxLength="9" 
                                onChange={onChangeLeaderName}
                            />
                        </div>
                        <button onClick={onSaveHighScore}>Save score</button>
                    </div>
                </div>
            )}
            <div>
                <button id="play-again" onClick={() => setGamePlay(false)}>Play Again</button>
            </div>
        </div>
    )
}

export default GameEnd