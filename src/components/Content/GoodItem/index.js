import React from 'react';

import './styles.scss';

const GoodItem = (props) => {
    return (
        <div className="good-item">
            <div className="good-image">
                <img alt="phone" src={props.imgSrc} />
            </div>
            <div className="good-info">
                <p className="good-description">{props.description}</p>
                <span>{`${props.price} р.`}</span>
            </div>
        </div>
    );
};

export default GoodItem;