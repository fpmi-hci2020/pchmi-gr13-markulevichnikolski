import React, { useState, useEffect } from 'react';

import './styles.scss';
import api from '../../api';
import GoodItem from '../Content/GoodItem';
import { FaHome } from "react-icons/fa"
import history from '../../history';

const Basket = () => {
    const [orderedGoods, setOrderedGoods] = useState([]);

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

    useEffect(() => {
        getOrderedGoods();
    }, []);

    const delItem = async (id) => {
        const userId = JSON.parse(localStorage.getItem('userData'))._id;
        console.log('Suka', id)
        try {
            await api.post('/goods/delBuy', { userId, goodId: id })
            getOrderedGoods();
        } catch (err) {
            alert(err);
        }
    };

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
                    delItem = { () => delItem(good._id) }
                />
            )
        })
    };

    const goHome = () =>
    {
        history.push('/home')
    }

    return (
        <div className="ordered-goods-container">
            <div className="title">
                <FaHome className = "home-button" onClick = {goHome}/>  
                <h3>Ordered goods</h3>
            </div>
            <div className = "content">
                {renderOrderedGoods()}
            </div>
        </div>
    );
};

export default Basket;