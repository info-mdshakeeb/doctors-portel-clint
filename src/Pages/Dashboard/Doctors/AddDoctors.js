import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddDoctors = () => {
    const imageBBapi = process.env.REACT_APP_imageBB;
    const navigate = useNavigate()

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { data: appionmenteFilds, isLoading } = useQuery({
        queryKey: ["appionmenteFilds"],
        queryFn: async () => {
            const res = await fetch('http://localhost:2100/appionmenteFilds')
            const data = await res.json()
            return data
        }
    })
    const onSubmit = data => {
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image)
        const urL = `https://api.imgbb.com/1/upload?expiration=600&key=${imageBBapi}`
        fetch(urL, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(rs => {
                console.log(rs);
                if (rs.success) {
                    const doctor = {
                        name: data.Name,
                        email: data.Email,
                        image: rs.data.url,
                        type: data.appionmenteFild
                    }
                    fetch("http://localhost:2100/dotcors", {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(doctor)
                    }).then(res => res.json())
                        .then(data =>
                            navigate('/dashboard/manageDoctor'))
                }
            })
    }
    return (
        <div className='w-2/5 mx-auto'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Name</span></label>
                    <input
                        {...register('Name')}
                        placeholder="Name"
                        className="input input-bordered w-full " />
                </div>
                <div className="">
                    <label className="label"><span className="label-text">Upload Your Image</span></label>
                    <input type="file"
                        {...register('image')}
                        className="file-input file-input-bordered w-full" />
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Email</span></label>
                    <input
                        {...register('Email')}
                        placeholder="Email"
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Selece a spacalitry</span></label>
                    <select
                        {...register('appionmenteFild')}
                        className="select select-bordered w-full ">
                        {appionmenteFilds?.map(appionmenteFild =>
                            <option
                                key={appionmenteFild._id}>
                                {appionmenteFild.name}
                            </option>)
                        }
                    </select>
                </div>

                <input className='btn btn-accent w-full mt-3' type="submit"
                />
            </form>

        </div>
    );
};

export default AddDoctors;