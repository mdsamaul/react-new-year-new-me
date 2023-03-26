import React from 'react';

import Utility from './Utility';

const MyPlans = () => {

    return (
        <div className='py-20'>
            <h1 className='font-bold text-6xl text-center  text-black'>
                My Plans</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10'>
                <Utility images="/public/images/code.png" title="Web Development" datails="I want to start"></Utility>
                <Utility images="/public/images/js.png" title="Javascript" datails="I want to learn"></Utility>
                <Utility images="/public/images/stop.png" title="Smoking Habit" datails="I want to end"></Utility>
                <Utility images="/public/images/shop.png" title="ecommerce" datails="I want to develop"></Utility>
            </div>
        </div>
    );
};

export default MyPlans;