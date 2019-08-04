import React from "react";

import cardBack from "./cat-pattern.png"

import './Card.scss'

const Card = ({catImage, catName, cardClickHandler, catIndex, flipped}) => {
    // State and state set function. useState is a function that gets passed an initial value and returns an array of the state (flipped) and a function to update the state (setFlipped)
    // const [flipped, setFlipped] = useState(false)
    // Only flip cards face up, not face down
    const flipCard = () => {
        if (!flipped) {
            // setFlipped(true)
            cardClickHandler(catIndex)
        }
        // TODO: Add else statement warning for already been clicked
    }

    return (
        <div className="Card" onClick={flipCard}>
            {flipped ? (
                <div className="Card__box">
                    <img className="Card__image" src={catImage} alt='card-back' />
                    <p className="Card__name">{catName}</p>
                </div>
            ) : (
                <img className="Card__image" src={cardBack} alt={catName} />                    
            )}
        </div>
    )
}

export default Card