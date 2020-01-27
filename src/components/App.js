import React, {useState} from "react"
import Leaderboard from "./Leaderboard/Leaderboard"
import {difficultyOptions} from "../utils"

import './App.scss'
import Game from "./Game/Game"

//TODO: play game onclick handler

const App = () => {
    const [difficulty, setDifficulty] = useState('easy')
    const [gamePlay, setGamePlay] = useState(false)

    // TODO: change line 33 (score ?) area so that if you get a score of <=0, you get a Try Again message.
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
                    <Leaderboard />
                    
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

                    <button onClick={() => setGamePlay(true)}>Play</button>
                </>
            )}
        </div>
    )
}

//<button onClick={() => resetGame(difficultyOptions.find(d => d.value === difficulty).catCount)}>Play{!!score && " Again"}</button>

export default App