import React from 'react';
import quote from '../../assets/icons/quote.svg';
import user from './../../assets/images/people1.png';

const Testimonial = () => {
    const TestimonialData = [
        {
            id: 1,
            Name: 'Winson Herry',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content ',
            pic: user,
            address: 'California'
        },
        {
            id: 1,
            Name: 'Winson Herry',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content ',
            pic: user,
            address: 'California'
        }, {
            id: 1,
            Name: 'Winson Herry',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content ',
            pic: user,
            address: 'California'
        },
    ]
    return (
        <section>
            <div className="mx-5 flex justify-between">
                <div className="">
                    <p className='text-primary'>Testimonials</p>
                    <p className='text-4xl'>What Our Patients Says</p>
                </div>
                <figure>
                    <img className=' w-24 md:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className="grid md:gap-3 md:grid-cols-2 lg:grid-cols-3 mx-5">
                {
                    TestimonialData.map(testimonial =>
                        <div className="card  bg-base-100 shadow-xl" key={testimonial.id}>
                            <div className="card-body">
                                <p>{testimonial.description}</p>
                            </div>
                            <div className="card-actions  ">
                                <div className="avatar h-24 ">
                                    <div className="w-16 h-16 mx-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                                        <img src={testimonial.pic} alt='' />
                                    </div>
                                    <div className="w-auto">
                                        <p>{testimonial.Name}</p>
                                        <p>{testimonial.address}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default Testimonial;