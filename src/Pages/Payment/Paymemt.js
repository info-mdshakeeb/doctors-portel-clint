import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51M6D28BetmksUXSc82ENaSvliF6HG6MDJv4cL2aTFQDKZVA00yZpVctAPBfcXjQq7PaRET9GUVg5DJVm7qCdbBDZ00c5vWBKMp');

const Paymemt = () => {
    const data = useLoaderData()

    return (
        <div className="pt-5">
            <div>
                <p className="text-2xl ">Make payment For - {data[0].TreatmentName}</p>
            </div>
            <div className=" w-2/6 mt-20 shadow-xl p-10 ">
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Paymemt;