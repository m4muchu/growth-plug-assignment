import { useContext } from 'react';
import { omit } from 'lodash';
import { ModalContext } from 'js/contexts';

export function useModal() {

    const { modal, setModal } = useContext(ModalContext);
    const hide = ( modal_name ) => {
        setModal(omit(modal, [modal_name]));
    }

    const show = ( modal_name, props ) => {
        setModal({
            ...modal,
            [modal_name] : {
                ...props,
                is_open: true,
                hide: () => hide(modal_name)
            }
        });
    }

    const hideAllModal = ( modal_name, props ) => {
        setModal({});
    }

    return [ show, hide, modal, hideAllModal ];
}
