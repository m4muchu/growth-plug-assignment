import React from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    Button
} from 'react-bootstrap';
import { history } from 'js/helpers';
import { configConstants } from 'js/constants';

export const Header = () => {

    const sidemenuToggle = () => {
        document.getElementById("sidebarNav").classList.toggle("open");
    }

    const logout = () => {
        localStorage.removeItem(configConstants.TOKEN_NAME);
        localStorage.removeItem(configConstants.USER_ID);
        history.push('/auth');
    }

    return (
        <Navbar color="white" light expand="lg" className="admin-navbar-head">
            <div className="d-flex ml-auto hide-lg">
                <p onClick={logout} style={{ cursor: 'pointer' }}>
                    <Button variant="info">Logout</Button>
                </p>
                <Nav>
                    <NavItem>
                        <Navbar.Toggle
                            className="ml-2"
                            data-toggle="offcanvas"
                            data-target="#sidebarNav"
                            onClick={sidemenuToggle}
                        />
                    </NavItem>
                </Nav>
            </div>
            {/* <Navbar.Collapse navbar className="main-header">
                <Nav className="ml-auto main-header-right" navbar>
                    <NavItem>
                        <p>Powered By Toolx</p>
                    </NavItem>
                </Nav>
            </Navbar.Collapse> */}
        </Navbar>
    );
}