import React, { useContext } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import FacebookLogin from 'react-facebook-login';
import { AuthProvider } from 'js/contexts';
import { history } from 'js/helpers';
import { configConstants } from 'js/constants';


export const Login = () => {

    const { auth, setAuth } = useContext(AuthProvider);

    const responseFacebook = (response) => {
        if (response && response.accessToken && response.userID) {
            localStorage.setItem(configConstants.TOKEN_NAME, response.accessToken);
            localStorage.setItem(configConstants.USER_ID, response.userID)
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
                                callback={responseFacebook}
                                disableMobileRedirect={true}
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