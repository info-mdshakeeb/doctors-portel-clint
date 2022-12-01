import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../Share/Loading';
import ApoinmentBanner from './ApoinmentBanner';
import Model from './Model';

const Appionment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const dateErrorhendel = date => {
        if (!date) return;
        setSelectedDate(date)
    }
    const date = format(selectedDate, 'PP');
    const [moduleinfo, setModuleinfo] = useState(null);

    const { data: apoinmentOprtions = [], refetch, isLoading } = useQuery({
        queryKey: ['apoinmentOprtions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:2100/appointmentOptions?date=${date}`)
            const data = res.json();
            return data
        }
    })
    if (isLoading) return <Loading />
    return (
        <div>
            <ApoinmentBanner
                selectedDate={selectedDate}
                setSelectedDate={dateErrorhendel} />
            <div className="my-20 text-center text-primary text-xl">
                <p> Available appointment {format(selectedDate, 'PP')}.</p>
            </div>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3  w-4/5 mx-auto text-center">
                {
                    apoinmentOprtions?.map(apoinmentOprtion =>
                        <div className="card bg-base-100 shadow-xl " key={apoinmentOprtion._id}>
                            <div className="card-body">
                                <h2 className="card-title">{apoinmentOprtion.name}</h2>
                                <p>{apoinmentOprtion.slots.length > 0 ? apoinmentOprtion.slots[0] : "try another day"}</p>
                                <p>{apoinmentOprtion.slots.length} {apoinmentOprtion.slots.length > 1 ? "spaces" : "space"} Available</p>
                                <p>Price :{apoinmentOprtion.price}</p>
                                <label
                                    htmlFor="booking-model"
                                    className="btn btn-primary"
                                    onClick={() => setModuleinfo(apoinmentOprtion)}>book now</label>
                            </div>
                            {moduleinfo &&
                                <Model
                                    key={apoinmentOprtion._id}
                                    id={"booking-model"}
                                    selectedDate={selectedDate}
                                    moduleinfo={moduleinfo}
                                    setModuleinfo={setModuleinfo}
                                    refetch={refetch}
                                />
                            }
                        </div>
                    )
                }
            </div>
        </div>

    );
};

export default Appionment;