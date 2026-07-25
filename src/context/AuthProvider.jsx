import React, { createContext } from 'react';
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const userInfo = {
user:"suni@GiMailShirt.com"
    }
    return (
<AuthContext value={userInfo}>
{children}
</AuthContext>
    );
};

export default AuthProvider;