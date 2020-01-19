import React, {useState, useEffect} from "react"

import {difficultyOptions} from "../../utils"

import './GameStart.scss'

//TODO: play game onclick handler

const GameStart = ({resetGame, score}) => {
    const [difficulty, setDifficulty] = useState('easy')
    const [leaderName, setLeaderName] = useState('')
    const [hideDifficultySettings, setHideDifficultySettings] = useState(false)
    const [showLeaderboard, setShowLeaderboard] = useState(false)

    const highScores = JSON.parse(localStorage.getItem('highScores')) || []
    console.log('highScores', highScores)
    console.log('new score', {score})
    if (score > 0) highScores.push({score})
    const leaderBoard = highScores.sort((a,b) => b.score - a.score)
    if (leaderBoard.length === 11) leaderBoard.splice(-1)
    console.log('leaderBoard', leaderBoard)
    const newHighScorePlace = leaderBoard.findIndex(leader => !leader.name)
    console.log('newHighScorePlace', newHighScorePlace)

    // Only runs when newHighScorePlace changes
    useEffect(() => {
        setHideDifficultySettings(newHighScorePlace !== -1)
    }, [newHighScorePlace])

    const onChangeLeaderName = e => {
        setLeaderName(e.target.value)
    }
    const onSaveHighScore = () => {
        leaderBoard[newHighScorePlace].name = leaderName
        localStorage.setItem('highScores', JSON.stringify(leaderBoard))
    }
   

    // TODO: change line 33 (score ?) area so that if you get a score of <=0, you get a Try Again message.
    return (
        <div className="GameStart">
            {score ? (
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
                    )
                }
                </div>
            ) : (
                <div>
                    <div className="GameStart__main-title">Kitten Matching Game</div>
                    <div className="GameStart__sub-title">A feline friendly game made with React</div>
                </div>
            )}

            {!hideDifficultySettings && (
                <>
                    <form className="GameStart__difficulty-radio-buttons">
                        {difficultyOptions.map(d => (
                            <div key={d.label} className="GameStart__difficulty-radio-buttons__container">
                                <label>
                                    <input
                                        type="radio"
                                        name="difficulty"
                                        value={d.label}
                                        checked={d.value === difficulty}
                                        onChange={() => setDifficulty(d.value)}
                                    />
                                    {d.label}
                                </label>
                            </div>
                        ))}
                    </form> 

                    <button onClick={() => resetGame(difficultyOptions.find(d => d.value === difficulty).catCount)}>Play{!!score && " Again"}</button>

                    <button onClick={() => setShowLeaderboard(true)}>High Scores</button>
                </>
            )} 
        </div>
    )
}

export default GameStart