import React, {useState} from "react"
import Leaderboard from "./Leaderboard/Leaderboard"
import {difficultyOptions, getOrderedLeaderboard} from "../utils"

import './App.scss'
import Game from "./Game/Game"

//TODO: play game onclick handler

const App = () => {
    const [difficulty, setDifficulty] = useState('easy')
    const [gamePlay, setGamePlay] = useState(false)

    const handleDifficultyChange = value => {
        console.log(value)
        setDifficulty(value)
    }

    const highScores = getOrderedLeaderboard()

    return (

        <div className="App">
            {gamePlay ? (
                <Game
                    numCats={difficultyOptions.find(d => d.value === difficulty).catCount}
                    setGamePlay={setGamePlay}
                />
            ) : (
                <>
                    <div>
                        <h1>Kitten Matching Game</h1>
                        <h2>A feline friendly game made with React</h2>
                    </div>
                    
                    <ul className="App__difficulty-form">
                        {difficultyOptions.map(d => (
                            <li 
                                key={d.label} className="App__difficulty-form__container"
                                onClick={() => handleDifficultyChange(d.value)}
                            >
                                <input
                                    id={`radio-button-${d.value}`}
                                    type="radio"
                                    name="difficulty"
                                    value={d.label}
                                    checked={d.value === difficulty}
                                />
                                <label htmlFor={`radio-button-${d.value}`}>{d.label}</label>
                            </li>
                        ))}
                    </ul> 

                    <button onClick={() => setGamePlay(true)}>Play</button>
                    
                    {highScores.length > 0 && 
                        <Leaderboard
                            highScores={highScores}
                        />
                    }
                </>
            )}
        </div>
    )
}

//<button onClick={() => resetGame(difficultyOptions.find(d => d.value === difficulty).catCount)}>Play{!!score && " Again"}</button>

export default App