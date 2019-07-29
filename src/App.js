import React, {useState} from 'react'

import Card from "./components/Card/Card"
import GameStart from "./components/GameStart/GameStart"
import Scoreboard from "./components/Scoreboard/Scoreboard"
import {doubleShuffle} from "./utils"

import './App.scss'

const App = () => {
  const [selectedCount, setSelectedCount] = useState(0)
  const [blockClicks, setBlockClicks] = useState(false)
  const [cats, setCats] = useState([])
  const [score, setScore] = useState(0)

  const unmatchedCatCount = cats.filter(cat => !cat.matched).length

  const cardClickHandler = (catIndex) => {
    if (blockClicks) return
    let updatedCount = selectedCount + 1
    setSelectedCount(updatedCount)
    let updatedCats = cats.map((cat, index) => catIndex === index ? {...cat, selected: true} : cat)
    setCats(updatedCats)
    console.log("updated cats at beginning", updatedCats)
    // Update the cats array
    // ... is a spread function, it adds everything that it had before back into the object. 
    // Then, we update only flipped. Because if you redefine something that's already there, it overwrites it.
    if (updatedCount === 2) {
      // Make a new array that only has the flipped cats
      const selectedCats = updatedCats.filter(cat => cat.selected)
      console.log("flipped cats ppleaseeee", selectedCats)

      // If it's a match:
      if (selectedCats[0].catName === selectedCats[1].catName) {
        console.log("WE HAVE A MATCH!!!!")
        // Set matched to true for the selected cats
        updatedCats = updatedCats.map(cat => cat.selected ? {...cat, selected: false, matched: true} : cat)
        updatedCount = 0
        console.log("updated cats after match", updatedCats)
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

  const resetGame = () => {
    setScore(0)
    setSelectedCount(0)
    setCats(doubleShuffle())
    setBlockClicks(false)
  }

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
        <Scoreboard
          score={score} 
        />
        <button onClick={resetGame}>Reset Game</button>
      </div>
      <div className="App__card-container">
        {cats.map((cat, index) => (
          <Card 
            catName={cat.catName}
            catImage={cat.catImage}
            flipped={cat.selected || cat.matched}
            cardClickHandler={cardClickHandler}
            catIndex={index}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default App

// TODO: Game ends when all cards are matched...what 
// should this look like? Easy/Medium/Hard levels based on how many images are
// chosen at random from the array to be in the game.

// 1. Style