import catsArray from "./cats"

export const difficultyOptions = [
   {
      label: 'Easy',
      value: 'easy',
      catCount: 5
   }, {
      label: 'Medium',
      value: 'medium',
      catCount: 10
   }, {
      label: 'Hard',
      value: 'hard',
      catCount: 15
   }
]

// Randomizes cats array and truncates it based on numCats
export const truncateCats = numCats => {
   const randCats = catsArray.sort(() => 0.5 - Math.random())
   return randCats.slice(0, numCats)
}

// Doubles the array to create matches and randomizes the order of display
export const doubleShuffle = numCats => {
   const cats = truncateCats(numCats)
   const doubleCats = cats.concat(cats)
   return doubleCats.sort(() => 0.5 - Math.random())
}

// Gets array of high scores from local storage and orders them from largest to smallest if not already ordered
export const getOrderedLeaderboard = () => {
   return JSON.parse(localStorage.getItem('highScores')).sort((a,b) => b.score - a.score)
}
