import React, {useState} from "react"

import {difficultyOptions} from "../utils"

import './App.scss'
import Game from "./Game/Game"

//TODO: play game onclick handler

const App = ({resetGame, score}) => {
    const [difficulty, setDifficulty] = useState('easy')

    const startGame = (difficulty) => {
        return (
            <Game
            />
        )
    }

    // TODO: change line 33 (score ?) area so that if you get a score of <=0, you get a Try Again message.
    return (
        <div className="App">
            <div>
                <div className="App__main-title">Kitten Matching Game</div>
                <div className="App__sub-title">A feline friendly game made with React</div>
            </div>

            <div>leaderboard</div>

            <form className="App__difficulty-radio-buttons">
                {difficultyOptions.map(d => (
                    <div key={d.label} className="App__difficulty-radio-buttons__container">
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

            <button onClick={() => startGame(difficulty)}>Play</button>
        </div>
    )
}

//<button onClick={() => resetGame(difficultyOptions.find(d => d.value === difficulty).catCount)}>Play{!!score && " Again"}</button>

export default App