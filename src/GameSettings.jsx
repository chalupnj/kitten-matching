import React from "react"

const difficulties = [
    "Easy",
    "Medium",
    "Hard"
]

const GameSettings = (props) => (
    <form>
        {difficulties.map(difficulty => (
            <input
                key={difficulty}
                type="radio"
                name="difficulty"
                value={difficulty}
            />
        ))}
    </form>
)

export default GameSettings