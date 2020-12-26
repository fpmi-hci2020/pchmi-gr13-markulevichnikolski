import React from 'react';

import api from '../../../api';

import './styles.scss';

const GoodItem = (props) => {
    const buyItem = async () => {
        const userId = JSON.parse(localStorage.getItem('userData'))._id;
        console.log('Suka', props.id)
        try {
            await api.post('/goods/buy', { userId, goodId: props.id })
        } catch (err) {
            alert(err);
        }
    };

    return (
        <div className="good-item">
            <div className="good-image">
                <img alt="phone" src={props.imgSrc} />
            </div>
            <div className="good-info">
                <p className="good-name">{props.name}</p>
                <p className="good-description">{props.description}</p>
                <span>{`${props.price} р.`}</span>
            </div>
            <div className={`buy-button-container ${props.hideBuyButton ? 'hide' : ''}`}>
                <button className="buy-button" onClick={buyItem}>
                    Buy
                </button>
            </div>
            <div className = {`buy-button-container ${props.hideDelButton ? 'hide' : ''}`}>
                <button className="buy-button" onClick={props.delItem}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default GoodItem;