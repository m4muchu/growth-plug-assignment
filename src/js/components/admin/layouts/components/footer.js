import React from 'react';
import moment from 'moment';


export class Footer extends React.Component {

    render() {
        return (
            <footer className="admin-footer">
                <p>Copyright © Growth Plug {moment().year()}. All Rights Reserved.</p>
            </footer>
        );
    }
}
