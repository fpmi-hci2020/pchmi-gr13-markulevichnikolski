import React, { useState, useEffect } from 'react';

import './styles.scss';
import api from '../../api';
import GoodItem from '../Content/GoodItem';

const Basket = () => {
    const [orderedGoods, setOrderedGoods] = useState([]);

    useEffect(() => {
        const getOrderedGoods = async () => {
            const userId = JSON.parse(localStorage.getItem('userData'))._id;
            try {
                const response = await api.get(`/goods/get-ordered-goods/${userId}`);
                const { goods } = response?.data?.data;

                setOrderedGoods(goods);
            } catch (err) {
                alert(err);
            }
        };

        getOrderedGoods();
    }, []);

    console.log('SUka', orderedGoods);
    const renderOrderedGoods = () => {
        return orderedGoods.map(good => {
            return (
                <GoodItem
                    key={good._id}
                    id={good._id}
                    description={good.description}
                    imgSrc={good.image}
                    price={good.price}
                    hideBuyButton
                />
            )
        })
    };

    return (
        <div className="ordered-goods-container">
            <div className="title">
                <h3>Ordered goods</h3>
            </div>
            {renderOrderedGoods()}
        </div>
    );
};

export default Basket;