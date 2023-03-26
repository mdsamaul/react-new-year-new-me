import React from 'react';
import Button from '../Button/Button';

const Banner = () => {
    return (
        <div className="bg-[url('../../../../public/images/banner-top.svg')] w-full h-screen">
            <div className='w-full h-screen block md:flex justify-around items-center'>
                <div></div>
                <div className="md:w-5/12 pt-32 md:pt-0 py-20 md:py-0 px-10 md:px-0">
                    <h1 className='font-bold text-6xl text-right  text-black'>
                        All Thinks Are Possible If You believe</h1>
                    <p className='py-10 text-right'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
                    <div className='text-center md:text-right'>
                        <Button>Contact Us</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;