import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import ApoinmentBanner from './ApoinmentBanner';

const Appionment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [apoinmentOprtions, setApoinmentOprtions] = useState([])

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setApoinmentOprtions(data))
    }, [])

    return (
        <div>
            <ApoinmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate} />
            <div className="my-20 text-center text-primary text-xl">
                <p> Available appointment {format(selectedDate, 'PP')}.</p>
            </div>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3  w-4/5 mx-auto text-center">
                {
                    apoinmentOprtions.map(apoinmentOprtion =>
                        <div className="card bg-base-100 shadow-xl " key={apoinmentOprtion._id}>
                            <div className="card-body">
                                <h2 className="card-title">{apoinmentOprtion.name}</h2>
                                <p>{apoinmentOprtion.slots.length > 0 ? apoinmentOprtion.slots[0] : "try another day"}</p>
                                <p>{apoinmentOprtion.slots.length} {apoinmentOprtion.slots.length > 1 ? "spaces" : "space"} Available</p>
                                <label htmlFor="my-modal-3" className="btn">book now</label>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>

    );
};

export default Appionment;