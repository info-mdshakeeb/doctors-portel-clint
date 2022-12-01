import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthUser } from '../Context/UserContext';

const Signup = () => {
    const { createuser, updateUser, user } = useContext(AuthUser)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()

    const onSubmit = data => {
        createuser(data.email, data.password)
            .then(result => {
                const userinfo = { displayName: data.name }
                updateUser(userinfo)
                    .then(rs => saveUser(data.name, data.email))
            }).catch(err => console.log(err.message))
    }
    const saveUser = (name, email) => {
        const user = { name, email }
        fetch("http://localhost:2100/users", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(rs => getUserToken(email))
    }
    const getUserToken = email => {
        fetch(`http://localhost:2100/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.AccessToken) {
                    localStorage.setItem('AccessToken', data.AccessToken)
                    navigate('/')
                }
            })
    }
    return (
        <div className='flex justify-center aling-center'>
            <div className=" shadow-xl p-10 w-1/4">
                <div className="text-center">SignUp</div>
                <div className="w-full">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Name</span></label>
                            <input
                                {...register("name", { required: 'name is require' })}
                                placeholder="Name"
                                className="input input-bordered w-full " />
                            {errors.name && <p role="alert" className='text-red-600'>{errors.name?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input
                                {...register("email", { required: 'email is require' })}
                                placeholder="Email"
                                className="input input-bordered w-full " />
                            {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Password</span></label>
                            <input
                                {...register("password", {
                                    required: 'password is require', minLength: {
                                        value: 5, message: "must need 5 pass"
                                    }
                                })}
                                placeholder="password"
                                type='password'
                                className="input input-bordered w-full " />
                            {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
                        </div>
                        <input className='btn btn-accent w-full mt-3' type="submit"
                        />
                        <p className='text-sm my-2'>Already have Account? <Link to='/login' className='text-primary'>Login Page</Link></p>
                    </form>
                    <div className="divider">OR</div>
                    <button className='btn btn-primary btn-outline w-full'>Sign In With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;