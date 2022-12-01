import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthUser } from '../Context/UserContext';

const Login = () => {
    const { loginWithGoogle, loginEP } = useContext(AuthUser);
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();

    const googleLogin = () => {
        loginWithGoogle()
            .then(result => console.log(result))
            .catch(err => console.log(err.message))
    }
    const onsubmit = data => {
        loginEP(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(err => console.log(err.message))
    }
    return (
        <div className=' flex justify-center items-center'>

            <div className="  shadow-xl p-10">
                <div className="text-center">Login</div>
                <div className="">
                    <form onSubmit={handleSubmit(onsubmit)}>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input
                                {...register("email", { required: 'email is require' })}
                                placeholder="Email"
                                className="input input-bordered w-full " />
                            {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text">PassWord</span></label>
                            <input
                                {...register("password", {
                                    required: 'password is required',
                                    minLength: { value: 6, message: "password must need 6  character" }
                                })}
                                placeholder="Password"
                                className="input input-bordered w-full" />
                            {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
                            <label className="label">
                                <span className="label-text-alt">Forget PassWord?</span>
                            </label>
                        </div>
                        <input className='btn btn-accent w-full mt-5 text-white' type="submit" />
                        <p className='text-sm my-2'>New on Doctor portel ? <Link to='/signup' className='text-primary'>create new account</Link></p>
                    </form>
                    <div className="divider">OR</div>
                    <button className='btn btn-outline btn-accent w-full text-white' type="submit" onClick={googleLogin} >Login With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;