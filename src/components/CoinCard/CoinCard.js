import React from 'react';
import './CoinCard.css'

const CoinCard = props => {
    const { name, image, symbol } = props.coin;
    return (
        <div className='flex justify-around items-center py-5 coin-card cursor-pointer rounded-lg'>
            <img className='w-1/4' src={image} alt="" />
            <div>
                <h1 className='text-lg font-bold text-gray-600'>{ name }</h1>
                <h1 className='font-bold text-gray-600'>{ symbol }</h1>
            </div>
        </div>
    );
};

export default CoinCard;