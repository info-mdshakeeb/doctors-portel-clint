import React from 'react';
import clock from '../../../../assets/icons/clock.svg';
import marker from '../../../../assets/icons/marker.svg';
import phone from '../../../../assets/icons/phone.svg';
import CardesDetails from '../CardDetails/CardesDetails';


const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            Name: 'Opening Hours',
            description: 'open at 9am to 5am ',
            icon: clock,
            bgClass: 'bg-primary'
        },
        {
            id: 2,
            Name: 'Location',
            description: 'Jamalpur fire service',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 1,
            Name: 'Contact',
            description: 'number is here',
            icon: phone,
            bgClass: 'bg-primary'
        },
    ]
    return (
        <div className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 mx-5'>
            {
                cardData.map(card => <CardesDetails key={card.id} card={card} />)
            }
        </div>
    );
};

export default InfoCards;