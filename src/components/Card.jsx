import React from 'react';
import './Card.scss';

const Card = (props) => {
    return (
        <div className="card" key="props.key" onClick={show}>
            {props.children}
        </div>
    )
}

const show = (event) => {
    let card = event.target;
    console.log(card.className)

}

export default Card;