import React from 'react';
import Button from '../Button/Button';

const HandWatch = () => {
    return (
        <div className='w-full h-72'>
            <div className="w-9/12 h-[60%] mx-auto  rounded-md bg-[url('../../../../public/images/hand-watch.png')]">
                <div className='p-10'>
                    <h1 className='py-5 text-white font-bold text-3xl'>Awlays keep a positive mindset</h1>
                    <Button>Call Now</Button>
                </div>
            </div>
        </div>
    );
};

export default HandWatch;