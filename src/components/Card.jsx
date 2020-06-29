import React from 'react';
import './Card.scss';

const Card = (props) => {
    return (
        <div className="Card-div" key="props.key">
            {props.children}
        </div>
    )
}

export default Card;