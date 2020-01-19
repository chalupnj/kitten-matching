import React, {useState} from 'react'

import Card from "./components/Card/Card"
import GameStart from "./components/GameStart/GameStart"
import Scoreboard from "./components/Scoreboard/Scoreboard"
import {doubleShuffle} from "./utils"

import './App.scss'
import { blockStatement } from '@babel/types'

const App = () => {
  const [selectedCount, setSelectedCount] = useState(0)
  const [blockClicks, setBlockClicks] = useState(false)
  const [cats, setCats] = useState([])
  const [score, setScore] = useState([])

  const unmatchedCatCount = cats.filter(cat => !cat.matched).length

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

  const resetGame = (numCats = 10) => {
    setScore(0)
    setSelectedCount(0)
    setCats(doubleShuffle(numCats))
    setBlockClicks(false)
  }

  //End of game
  if (!unmatchedCatCount) { 
    return (
      <GameStart
        score={score}
        resetGame={resetGame}
      />
    )
  }

  return (
    <div className="App">
      <div className="App__header">
        <div className="App__intro-title">Kitten Matching Game</div>
        <Scoreboard
          score={score} 
        />
        <button onClick={resetGame}>Reset Game</button>
      </div>
      <div className="App__card-container">
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

export default App

// Future improvements:
// - Timer
// - Printable certificate for winning
// - Scoreboard
// - Save difficulty