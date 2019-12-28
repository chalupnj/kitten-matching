import React, {useState} from "react"

import {difficultyOptions} from "../../utils"

import './GameStart.scss'

const GameStart = ({resetGame, score}) => {
    const [difficulty, setDifficulty] = useState('easy')
    return (
        <div className="GameStart">
            {score ? (
                <div>
                    <h1>CONGRATULATIONS!! You won!</h1>
                    <h2>Final Score: {score}</h2>
                </div>
            ) : (
                <div>
                    <h1>Kitten Matching Game</h1>
                    <h2>A feline friendly game made with React</h2>
                </div>
            )}

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
        </div>
    )
}

export default GameStart