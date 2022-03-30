import React, { useEffect, useState } from 'react';
import CoinCard from '../CoinCard/CoinCard';
import Spinner from '../Spinner/Spinner';

const Coins = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(res => res.json())
            .then(data => {
                setCoins(data);
                setLoading(false)
            })
    }, [])
    return (
        <>
            {loading?(<Spinner/>) : (
                <div>
                    <div className='text-center mt-10'>
                        <h1 className='text-3xl font-medium mb-3'>Available Crypto Currencies</h1>
                        <h1 className='font-mono text-xl font-bold text-gray-500'>Total Coins: {coins.length}</h1>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10 text-center px-3 md:px-8 py-10'>
                        {
                            coins.map(coin => <CoinCard key = {coin.id} coin = {coin}></CoinCard>)
                        }
                    </div>
                </div>
            )
            }
        </>
    )
};

export default Coins;