import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthUser } from '../../Context/UserContext';
import Loading from '../Share/Loading';

const Myappionment = () => {
    const { user } = useContext(AuthUser);

    const url = `http://localhost:2100/bookings?email=${user?.email}`

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: localStorage.getItem('AccessToken')
                }
            });
            const data = await res.json();
            return data
        }
    })

    if (isLoading) return <Loading />
    return (
        <div>
            <p className="text-2xl py-3">My Appoinments</p>
            <div className="">
                <div className="overflow-x-auto">
                    <table className="table w-4/5">

                        <thead>
                            <tr>
                                <th></th>
                                <th>patient</th>
                                <th>email</th>
                                <th>TreatmentName</th>
                                <th>slot</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                bookings.data?.map((booking, i) => <tr className="">
                                    <th>{i + 1}</th>
                                    <th>{booking.patient}</th>
                                    <td>{booking.email}</td>
                                    <td>{booking.TreatmentName}</td>
                                    <td>{booking.slot}</td>
                                    <td>{booking.appionmentDate}</td>
                                    <td>{booking.price && !booking.paid &&
                                        <Link to={`/dashboard/payment/${booking._id}`}><p className='btn btn-warning'>pay</p></Link>
                                    }</td>
                                    <td>{booking.price && booking.paid &&
                                        <p>Payed</p>
                                    }</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Myappionment;