import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import { portalRoutes } from "js/routes/Admin/portal";
import { Sidebar } from 'js/components/admin/layouts/components/side-bar';
import { Header } from 'js/components/admin/layouts/components/header';
import { Footer } from 'js/components/admin/layouts/components/footer';
import { history } from 'js/helpers';
import { isEmpty } from 'lodash';

export const PortalLayout = () => {
    const [token, setToken] = useState('');

    const switchRoutes = (
        <Switch>
            {portalRoutes.map((prop, key) => {
                return <Route path={prop.path} component={prop.component} key={key} />
            })}
        </Switch>
    );

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token){
            history.push('/auth');
        }
        else {
            setToken(token);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {
                !isEmpty(token) &&
                <div className="base-container">
                    <Sidebar />
                    <div className="global-content">
                        <Header />
                        <div className="global-datawrap">
                            <div className="global-datawrap__inner">
                                {switchRoutes}
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            }
        </>
    )
}