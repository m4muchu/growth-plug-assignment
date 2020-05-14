import React, { useState, useEffect, useContext } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import FacebookLogin from 'react-facebook-login';
import { AuthProvider } from 'js/contexts';
import { history } from 'js/helpers';



export const Login = () => {

    const { auth, setAuth } = useContext(AuthProvider);

    const componentClicked = () => {
        console.log('component clicked++++++++++++');
    }

    const responseFacebook = (response) => {
        console.log('response++++++++++', response);
        if (response) {
            localStorage.setItem('token', response.accessToken);
            localStorage.setItem('user_id', response.userID)
            setAuth({ ...auth, is_logged_in: true, ...response });
            history.push('/admin/dashboard');
        }
    }
    return (
        <div className="login-wrapper">
            <Container className="login-container">
                <Row>
                    <Col md={12} sm={12} className='logo'>
                        <img src="/images/logo.png" alt="" />
                    </Col>
                    <Col md={12} sm={12}>
                        <Card.Body className="card-body">
                            <FacebookLogin
                                appId="657484211766914"
                                autoLoad={false}
                                fields="name,email,picture"
                                onClick={componentClicked}
                                callback={responseFacebook}
                            //icon={<AiFillFacebook/>}
                            />
                        </Card.Body>
                    </Col>
                    <Col md={12} sm={12}>
                        <p>I agree to Privacy Policy and Terms</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}