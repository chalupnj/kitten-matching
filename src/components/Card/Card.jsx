import React, {useState, Fragment} from "react";

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
                <Fragment class="Card__box">
                    <img className="Card__image" src={catImage} />
                    <p className="Card__name">{catName}</p>
                </Fragment>
            ) : (
                <img className="Card__image" src={cardBack} />                    
            )}
        </div>
    )
}

export default Card