import React from 'react';
import bg from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png';

const Banner = () => {
    return (
        <div className='mx-5'>
            <div style={{ backgroundImage: `url(${bg})` }} className="hero bg-base-100 lg:p-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="md:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div className=''>
                        <div className="">
                            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                            <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        </div>
                        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary  ga">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;