import React from 'react';

const Failures = () => {
    return (
        <div className="bg-[url('../../../../public/images/failures.png')] w-full h-screen">
            <div className='w-full h-screen block md:flex justify-around items-center'>
                <div></div>
                <div className="md:w-5/12 pt-32 md:pt-0 py-20 md:py-0 px-10 md:px-0">
                    <h1 className='font-bold text-6xl text-right  text-black'>
                        My failures of previous year</h1>
                    <p className='py-10 text-right text-md'>Contrary to popular belief, Lorem Ipsum is not simply random text. <br /> It has roots in a piece of classical Latin literature from 45 BC,  <br /> making it over 2000 years old. Richard McClintock.</p>
                    <div className='w-full ml-32'>
                        <div className='flex'>
                            <ul>
                                <li className='p-2'><img src="../../../../public/images/Vector.svg" alt="" /></li>
                                <li className='p-2'><img src="../../../../public/images/Vector.svg" alt="" /></li>
                                <li className='p-2'><img src="../../../../public/images/Vector.svg" alt="" /></li>
                                <li className='p-2'><img src="../../../../public/images/Vector.svg" alt="" /></li>
                                <li className='p-2'><img src="../../../../public/images/Vector.svg" alt="" /></li>


                            </ul>
                            <ul>
                                <li className=''>Contrary to popular belief, is not simply.</li>
                                <li className='p-1'>Contrary to popular belief.</li>
                                <li className='p-1'>Contrary to popular , is not simply.</li>
                                <li className='p-1'>Contrary to popular belief, is not simply.</li>
                                <li className=''>Contrary to popular simply.</li>


                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Failures;