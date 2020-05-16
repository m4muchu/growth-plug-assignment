import React from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    Button,
    Tooltip,
    OverlayTrigger
} from 'react-bootstrap';
import { history } from 'js/helpers';
import { configConstants } from 'js/constants';
import { FaPowerOff } from 'react-icons/fa';

export const Header = () => {

    const sidemenuToggle = () => {
        document.getElementById("sidebarNav").classList.toggle("open");
    }

    const logout = () => {
        localStorage.removeItem(configConstants.TOKEN_NAME);
        localStorage.removeItem(configConstants.USER_ID);
        history.push('/auth');
    }

    const renderTooltip = (props) => {
        return (
            <Tooltip id="button-tooltip" {...props}>
                Logout
          </Tooltip>
        );
    }

    return (
        <Navbar color="white" light expand="lg" className="admin-navbar-head">
            <div className="d-flex ml-auto hide-lg">
                <div onClick={logout} style={{ cursor: 'pointer' }}>
                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                    >
                        <Button variant="info"><FaPowerOff /></Button>
                    </OverlayTrigger>
                </div>
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
        </Navbar>
    );
}