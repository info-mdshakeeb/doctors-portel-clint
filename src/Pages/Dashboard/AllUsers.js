import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch("http://localhost:2100/users")
            const data = await res.json()
            return data
        }
    })
    const heandelMakeAdmin = id => {
        fetch(`http://localhost:2100/user/admin/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0) {
                    refetch()
                }
            })
    }
    return (
        <div>
            <p className="text-2xl py-3">All users</p>
            <div className="">
                <div className="overflow-x-auto">
                    <table className="table w-4/5">

                        <thead>
                            <tr>
                                <th></th>
                                <th>email</th>
                                <th>TreatmentName</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                users?.map((user, i) =>
                                    <tr key={user._id}>
                                        <th>{i + 1}</th>
                                        <th>{user.users}</th>
                                        <td>{user.email}</td>
                                        <td >{user?.role !== 'admin' &&
                                            <button onClick={() => heandelMakeAdmin(user._id)}
                                                className=' btn btn-sm'>make Admin</button>}</td>
                                        <td>X</td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;