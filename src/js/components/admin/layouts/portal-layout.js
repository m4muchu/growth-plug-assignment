import React, { useEffect, useContext } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { portalRoutes } from "js/routes/Admin/portal";
import { Sidebar } from 'js/components/admin/layouts/components/side-bar';
import { Header } from 'js/components/admin/layouts/components/header';
import { Footer } from 'js/components/admin/layouts/components/footer';
import { history } from 'js/helpers';
import { AuthProvider } from 'js/contexts';


export const PortalLayout = () => {
    const { auth, setAuth } = useContext(AuthProvider);

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {
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