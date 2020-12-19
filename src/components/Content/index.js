import React from 'react';

import './styles.scss';

import honor30 from '../../assets/images/honor30.jpeg';
import samsungA71 from '../../assets/images/samsungA71.jpeg';
import iphoneSE from '../../assets/images/iphoneSE.jpeg';

import GoodItem from './GoodItem';

const testContent = [
    {
        id: 1,
        imgSrc: honor30,
        description: 'Смартфон HONOR 30 BMH-AN10 8GB/256GB (титановый серебристый)\n' +
            'Android, экран 6.53" OLED (1080x2400), HiSilicon Kirin 985, ОЗУ 8 ГБ, флэш-память 256 ГБ, карты памяти, камера 40 Мп, аккумулятор 4000 мАч, 2 SIM',
        price: 1299
    },
    {
        id: 2,
        imgSrc: samsungA71,
        description: 'Смартфон Samsung Galaxy A71 SM-A715F/DSM 6GB/128GB (черный)\n' +
            '\n' +
            'Android, экран 6.7" AMOLED (1080x2400), Qualcomm Snapdragon 730, ОЗУ 6 ГБ, флэш-память 128 ГБ, карты памяти, камера 64 Мп, аккумулятор 4500 мАч, 2 SIM',
        price: 810
    },
    {
        id: 3,
        imgSrc: iphoneSE,
        description: 'Смартфон Apple iPhone SE 64GB (черный)\n' +
            'Apple iOS, экран 4.7" IPS (750x1334), Apple A13 Bionic, ОЗУ 3 ГБ, флэш-память 64 ГБ, камера 12 Мп, 1 SIM',
        price: 1260
    },
    {
        id: 4,
        imgSrc: honor30,
        description: 'Смартфон HONOR 30 BMH-AN10 8GB/256GB (титановый серебристый)\n' +
            'Android, экран 6.53" OLED (1080x2400), HiSilicon Kirin 985, ОЗУ 8 ГБ, флэш-память 256 ГБ, карты памяти, камера 40 Мп, аккумулятор 4000 мАч, 2 SIM',
        price: 1299
    },
    {
        id: 5,
        imgSrc: samsungA71,
        description: 'Смартфон Samsung Galaxy A71 SM-A715F/DSM 6GB/128GB (черный)\n' +
            '\n' +
            'Android, экран 6.7" AMOLED (1080x2400), Qualcomm Snapdragon 730, ОЗУ 6 ГБ, флэш-память 128 ГБ, карты памяти, камера 64 Мп, аккумулятор 4500 мАч, 2 SIM',
        price: 810
    },
    {
        id: 6,
        imgSrc: iphoneSE,
        description: 'Смартфон Apple iPhone SE 64GB (черный)\n' +
            'Apple iOS, экран 4.7" IPS (750x1334), Apple A13 Bionic, ОЗУ 3 ГБ, флэш-память 64 ГБ, камера 12 Мп, 1 SIM',
        price: 1260
    }
];

const Content = () => {
    const renderItems = () => {
        return testContent.map(item => {
            return (
                <GoodItem
                    key={item.id}
                    imgSrc={item.imgSrc}
                    description={item.description}
                    price={item.price}
                />
            );
        });
    };

    return renderItems();
};

export default Content;