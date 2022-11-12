import React from 'react';
import bg from './../assets/images/appointment.png';
import doctor from './../assets/images/doctor-small.png';

const MakeAppointment = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})` }} className='w-full my-20' >
            <div className="hero 1/2 mx-auto  ">
                <div className="hero-content flex-col lg:flex-row md:-mt-20">
                    <div className="">
                        <img src={doctor} className="hidden md:block max-w-lg  " alt='' />
                    </div>
                    <div className=' p-5 md:p-0  text-white lg:mt-20 md:text-center lg:text-left'>
                        <p className='text-secondary'>Appointment</p>
                        <h1 className="text-2xl font-bold">Make an appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-secondary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;