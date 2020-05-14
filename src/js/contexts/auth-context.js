import React from "react";

// set the defaults
export const AuthProvider = React.createContext({
  auth: {
    is_logged_in: false,
    user: {},
    token: '',
    previous_location:''
  },
  setAuth: () => {}
});


