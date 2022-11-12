import React from 'react';
import MakeAppointment from '../MakeAppointment';
import Banner from './Banner';
import InfoCards from './Cards/InfoCards/InfoCards';
import Exceptional from './Exceptional';
import Service from './Service/Service';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <InfoCards />
            <Service />
            <Exceptional />
            <MakeAppointment />
            <Testimonial />
        </div>
    );
};

export default Home;