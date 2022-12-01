import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Share/Loading';

const ManageDoctor = () => {
    const { data: doctors = [] } = useQuery({
        queryKey: ['doctor'],
        queryFn: async () => {
            const res = await fetch("http://localhost:2100/dashboard/manageDoctor");
            const data = res.json();
            return data
        }
    })
    if (!doctors) return <Loading />
    return (
        <div className='w-3/4 mx-auto'>
            <p className="text-2xl py-3">Doctors</p>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map(doctor =>
                                <tr key={doctor._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={doctor.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{doctor.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {doctor.type}
                                    </td>
                                    <td>{doctor.email}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">Action</button>
                                    </th>
                                </tr>
                            )}

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageDoctor;