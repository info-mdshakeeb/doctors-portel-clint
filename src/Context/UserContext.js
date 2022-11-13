import React, { createContext, useState } from 'react';

export const AuthUser = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState('n')

    const authinfo = { user };
    return (
        <AuthUser.Provider value={authinfo}>
            {children}
        </AuthUser.Provider>
    );
};

export default UserContext;