import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex bg-white py-6 px-3 md:px-8 justify-between sticky top-0'>
            <h1 className='cursor-pointer text-2xl font-mono font-bold'>Crypto Caffe</h1>
            <div className='flex gap-8 font-bold'>
                <Link to="/">Home</Link>
                <Link to="/coins">Coins</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    );
};

export default Header;