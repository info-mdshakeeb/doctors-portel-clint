import React from 'react';
import { DayPicker } from 'react-day-picker';
import bg from '../../../assets/images/bg.png';
import chair from '../../../assets/images/chair.png';


const ApoinmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <div className='mx-5'>
            <div style={{ backgroundImage: `url(${bg})` }} className="hero bg-base-100 lg:p-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="md:w-1/2 rounded-lg shadow-2xl lg:ml-20" alt='' />
                    <div className='text-gray-400 '>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApoinmentBanner;