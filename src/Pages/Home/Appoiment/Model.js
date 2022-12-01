import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthUser } from '../../../Context/UserContext';

const Model = ({ moduleinfo, id, selectedDate, setModuleinfo, refetch }) => {
    const { name, slots, price } = moduleinfo;
    const { user } = useContext(AuthUser);
    const date = format(selectedDate, 'PP')
    const hendelForm = e => {
        e.preventDefault()
        const form = e.target;
        const slot = form.slot.value;
        const email = form.email.value;
        const username = form.username.value;
        const phone = form.phone.value;
        const booking = {
            appionmentDate: date,
            slot,
            TreatmentName: name,
            patient: username,
            email,
            phone,
            price
        }
        fetch("http://localhost:2100/bookings", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    setModuleinfo(null)
                    refetch()
                }
                else {
                    setModuleinfo(null)
                    console.log(data.Message)
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id={id} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative ">
                    <label htmlFor={id} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>

                    <form className="grid grid-cols-1 gap-3 pt-10" onSubmit={hendelForm}>
                        <input type="text" value={date} disabled className="input input-bordered w-full " />
                        <select name='slot' className="select select-bordered w-full ">
                            {slots.map(slot => <option >{slot}</option>)}
                        </select>
                        <input type="email" name='email' placeholder="Email" className="input input-bordered w-full " defaultValue={user?.email} disabled />
                        <input type="text" name='username' placeholder="Name" defaultValue={user?.displayName} className="input input-bordered w-full " disabled />
                        <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered w-full " /> <br />
                        <button type='submit' className='btn btn-primary w-full mx-auto'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Model;