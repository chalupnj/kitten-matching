import React, {useState} from 'react'

import Card from "../Card/Card"
import GameEnd from "../GameEnd/GameEnd"
import {doubleShuffle} from "../../utils"

import './Game.scss'

const Game = ({numCats, setGamePlay}) => {
  const [selectedCount, setSelectedCount] = useState(0)
  const [blockClicks, setBlockClicks] = useState(false)
  const [cats, setCats] = useState(doubleShuffle(numCats))
  const [score, setScore] = useState(0)
  const unmatchedCatCount = cats.filter(cat => !cat.matched).length
  console.log(unmatchedCatCount)

  const cardClickHandler = (catIndex) => {
    if (blockClicks) return
    let updatedCount = selectedCount + 1
    setSelectedCount(updatedCount)
    let updatedCats = cats.map((cat, index) => catIndex === index ? {...cat, selected: true} : cat)
    setCats(updatedCats)
    // Update the cats array
    // ... is a spread function, it adds everything that it had before back into the object. 
    // Then, we update only flipped. Because if you redefine something that's already there, it overwrites it.
    if (updatedCount === 2) {
      // Make a new array that only has the flipped cats
      const selectedCats = updatedCats.filter(cat => cat.selected)

      // If it's a match:
      if (selectedCats[0].catName === selectedCats[1].catName) {
        // Set matched to true for the selected cats
        updatedCats = updatedCats.map(cat => cat.selected ? {...cat, selected: false, matched: true} : cat)
        updatedCount = 0
        setCats(updatedCats)
        setSelectedCount(updatedCount)
        setScore(score + 20)

      // If it's not a match:
      } else {
        setBlockClicks(true)
        setScore(score - 10)
        setTimeout(() => {
          setBlockClicks(false)
          updatedCats = updatedCats.map(cat => cat.selected ? {...cat, selected: false} : cat)
          updatedCount = 0
          setCats(updatedCats)
          setSelectedCount(updatedCount)
        }, 2000)
      }
    } 
  }

  //End of game
  if (!unmatchedCatCount) {
    const numHighScores = 5
    const highScores = JSON.parse(localStorage.getItem('highScores')) || []
    highScores.push({score})
    const leaderBoard = highScores.sort((a,b) => b.score - a.score)
    if (leaderBoard.length >= numHighScores) leaderBoard.splice(numHighScores-leaderBoard.length)
    const newHighScorePlace = leaderBoard.findIndex(leader => !leader.name)
    if (newHighScorePlace === -1) {
      localStorage.setItem('highScores', JSON.stringify(leaderBoard))
    }
    return (
      <GameEnd
        leaderBoard={leaderBoard}
        newHighScorePlace={newHighScorePlace}
        score={score}
        setGamePlay={setGamePlay}
      />
    )
  }

  return (
    <div className="Game">
      <div className="Game__header">
        <h1>Kitten Matching Game</h1>
        <div className="Scoreboard">
            <h2>Flip the cards to match the cats</h2>
            <div className="Game__score-display">Score: {score}</div>
        </div>
        <button onClick={() => setGamePlay(false)}>Reset Game</button>
      </div>
      <div className="Game__card-container">
        {cats.map((cat, index) => {
          return (
            <Card 
              catName={cat.catName}
              catImage={cat.catImage}
              flipped={cat.selected || cat.matched}
              cardClickHandler={cardClickHandler}
              catIndex={index}
              key={index}
            />
        )})}
      </div>
    </div>
  )
}

export default Game

// Future improvements:
// - Timer
// - Printable certificate for winning
// - Scoreboard
// - Save difficulty