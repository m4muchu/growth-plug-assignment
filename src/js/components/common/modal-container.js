import React, { useContext } from "react";
import * as Modals from 'js/components/common/modals';
import { ModalContext } from 'js/contexts';

export const ModalContainer = (props) => {
    const { modal }  = useContext(ModalContext);
    return (
        <React.Fragment >
            { Modals && Object.keys(Modals).map( (key, index) => {
                if( modal[key] ) {
                    let ModalComponent = Modals[key];
                    return <React.Fragment key={index} ><ModalComponent { ...modal[key] } /></React.Fragment>
                }
                return true;
            })}
        </React.Fragment>
    );
}
