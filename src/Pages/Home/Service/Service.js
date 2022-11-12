import React from 'react';
import cavity from '../../../assets/images/cavity.png';
import Fluoride from '../../../assets/images/fluoride.png';
import whitening from '../../../assets/images/whitening.png';

const Service = () => {
    const serviceData = [
        {
            id: 1,
            Name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the ',
            icon: Fluoride
        },
        {
            id: 2,
            Name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity
        },
        {
            id: 1,
            Name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: whitening
        },
    ]

    return (
        <div className='my-20 mx-5'>
            <div className="text-center">
                <div className="text-primary">OUR SERVICES</div>
                <p className='text-2xl'>Services We Provide</p>
            </div>
            <div className="grid md:gap-3 md:grid-cols-2 lg:grid-cols-3">
                {
                    serviceData.map(service =>
                        <div key={service.id} className='pt-20 text-center'>
                            <div className='card  shadow-md p-3'>
                                <figure ><img src={service.icon} alt="Movie" /></figure>
                                <div className="card-body">
                                    <h2 className="">{service.Name}</h2>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default Service;