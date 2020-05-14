import React from 'react';
import {
    Navbar,
    Nav,
    NavItem,
} from 'react-bootstrap';
import { history } from 'js/helpers';

export const Header = () => {

    const sidemenuToggle = () => {
        document.getElementById("sidebarNav").classList.toggle("open");
    }

    const logout = () => {
        localStorage.removeItem('token');
        history.push('/auth');
    }

    return (
        <Navbar color="white" light expand="lg" className="admin-navbar-head">
            <div className="d-flex ml-auto hide-lg">
                <p onClick={logout} style={{ cursor: 'pointer' }}>
                    Logout
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