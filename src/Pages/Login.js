import React, { useContext } from 'react';
import { AuthUser } from '../Context/UserContext';

const Login = () => {
    const { user, setUser } = useContext(AuthUser);

    console.log(user)


    return (
        <div>
            login
        </div>
    );
};

export default Login;