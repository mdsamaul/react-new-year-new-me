import React from 'react';

const utility = (props) => {
    const { images, title, datails } = props;
    return (
        <div className='text-center'>
            <img className='w-[40%] mx-auto' src={images} alt="" />
            <h1 className='font-bold text-2xl text-black'>{title}</h1>
            <p>{datails}</p>
        </div>
    );
};

export default utility;