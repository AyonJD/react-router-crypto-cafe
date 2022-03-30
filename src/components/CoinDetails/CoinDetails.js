import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CoinDetails = () => {
    const { id } = useParams()
    const [countryDetails, setCountryDetails] = useState({})
    useEffect(() => {
        const url = `https://api.coingecko.com/api/v3/coins/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCountryDetails(data))
    }, [id])
    return (
        <div className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
          <div className='h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 md:justify-items-around content-center'>
            <div className='order-2 md:order-1'>
              <h1 className='text-3xl'>General Info:</h1>
              <hr />
              <h1>Coin Name: {countryDetails.name}</h1>
              <h1>Market Cap Rank: {countryDetails.market_cap_rank}</h1>
              <h1>
                Origin:{' '}
                {countryDetails.country_origin ? countryDetails.country_origin : 'Not Available'}
              </h1>
              <h1>Contract Address: {countryDetails.contract_address}</h1>
              <h1>Hashing Algorithm: {countryDetails.hashing_algorithm}</h1>
              <h1>Genesis Date: {countryDetails.genesis_date}</h1>
              <h1>Last Updated: {countryDetails.last_updated}</h1>

              <h1 className='text-3xl mt-4'>Scores:</h1>
              <hr />
              <h1>Community Score: {countryDetails.community_score}</h1>
              <h1>Developer Score: {countryDetails.developer_score}</h1>
              <h1>Liquidity Score: {countryDetails.liquidity_score}</h1>
              <h1>Public Interest Score: {countryDetails.public_interest_score}</h1>
            </div>
            <div className='flex order-1 md:order-2 justify-center items-center'>
              <img src={countryDetails.image?.large} alt='coinImg' />
            </div>
          </div>
        </div>
    );
};

export default CoinDetails;