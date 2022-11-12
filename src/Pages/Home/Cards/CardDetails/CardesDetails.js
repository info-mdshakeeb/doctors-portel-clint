import React from 'react';

const CardesDetails = ({ card }) => {
    const { bgClass, Name, description, icon } = card;
    return (
        <div>
            <div className={`card card-side ${bgClass} shadow-xl text-white p-3`}>
                <figure><img src={icon} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{Name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CardesDetails;