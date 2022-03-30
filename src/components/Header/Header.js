import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='flex bg-white py-6 px-3 md:px-8 sm:justify-between sticky top-0 justify-center'>
            <h1 className='cursor-pointer text-2xl font-mono font-bold sm:block hidden'>Crypto Caffe</h1>
            <div className='flex gap-8 font-bold'>
                <CustomLink className="hover:text-cyan-600" to="/">Home</CustomLink>
                <CustomLink className="hover:text-cyan-600" to="/coins">Coins</CustomLink>
                <CustomLink className="hover:text-cyan-600" to="/about">About</CustomLink>
                <CustomLink className="hover:text-cyan-600" to="/contact">Contact</CustomLink>
            </div>
        </div>
    );
};

export default Header;