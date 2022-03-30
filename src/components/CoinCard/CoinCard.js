import React from 'react';
import { Link } from 'react-router-dom';
import './CoinCard.css'

const CoinCard = props => {
    const { name, image, symbol, id } = props.coin;
    return (
        <Link to={`/coin-details/${id}`}>
            <div className='flex justify-around items-center py-5 coin-card cursor-pointer rounded-lg'>
                <img className='w-1/4' src={image} alt="" />
                <div>
                    <h1 className='text-lg font-bold text-gray-600'>{ name }</h1>
                    <h1 className='font-bold text-gray-600'>{ symbol }</h1>
                </div>
            </div>
        </Link>
    );
};

export default CoinCard;