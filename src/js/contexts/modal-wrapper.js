import React, { useState } from "react";
import { ModalContext } from 'js/contexts';


 export const ModalWrapper = ({children}) => {

    const [modal, setModal] = useState({});
    const value = { modal, setModal };
    return (
        <ModalContext.Provider value={value}>
           {children}
        </ModalContext.Provider>
    )
};
