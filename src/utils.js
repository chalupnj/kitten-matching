import catsArray from "./cats.json"


// let easyLayout = 9
// export const easyShuffle = array => {
//     array.length = easyLayout
//     return array.sort(() => 0.5 - Math.random())
// }

// Doubles the array to create matches and randomizes the order of display
export const doubleShuffle = array => {
   const doubleCats = (catsArray.concat(catsArray))
   return doubleCats.sort(() => 0.5 - Math.random())
}