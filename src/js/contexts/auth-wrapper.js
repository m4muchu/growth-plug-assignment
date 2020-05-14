import React, { useState } from "react";
import { AuthProvider } from 'js/contexts';


export const AuthWrapper = ({children}) => {

    const [auth, setAuth] = useState(
        {
            user:{},
            is_logged_in: false,
            partner_login_success: false,
            user_role: '',
            previous_location: ''
        }
    );
    const value = { auth, setAuth };

    return (
        <AuthProvider.Provider value={value}>
            {children}
        </AuthProvider.Provider>
    )
};
