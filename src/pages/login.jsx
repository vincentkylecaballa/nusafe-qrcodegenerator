import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UnivLogo from "../assets/images/nu-logo.png"
import '../styles/login.scss'
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

const Login = ({setToken}) => {

    const [username, setUsername] = React.useState();
    const [password, setPassword] = React.useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

    return ( 
        <>
        <Container fluid>
            <div className='login-wrapper'>
                <Row>
                    <Col md={6} className="login-page">
                        <h1 className='login-title'>Welcome Back!</h1>
                        <p className='login-desc'>Log In to access the NU SAFETrace QR Code Geerator portal</p>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className='mb-3'>
                                <Form.Label className='m-0'>Username or Email Address</Form.Label>
                                <Form.Control type='text' placeholder='Enter Username or Email Address' onChange={e => setUsername(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label className='m-0'>Password</Form.Label>
                                <Form.Control type='password' placeholder='Enter password' onChange={e => setPassword(e.target.value)} />
                            </Form.Group>
                            <a>Forgot Password?</a>
                            <Button className='login-button' variant='primary' type='submit'>
                                Submit
                            </Button>
                            <Link to='/register'>No account yet? Sign Up.</Link>
                            <p className='login-disclaimer'>
                            All modules, contents and services included in this system is intended for Nationalians' use only. You may not, except with our express written permission, distribute or commercially exploit its contents. Nor may you transmit it or store it in any other website or other form of electronic retrieval system. NU SAFE Development Team ?? 2022.
                            </p>
                        </Form>
                    </Col>
                    <Col md={6} className='design-page'>
                        <Row>
                            <div className='login-right'>
                                <Col md={12} lg={12}>
                                    <img className="nu-logo-login" src={UnivLogo} alt="NU Logo" />
                                </Col>
                                <Col md={12} lg={12}>
                                    <div className="brand-text">
                                        <h2 className="text-logo">NU SAFE</h2>
                                    </div> 
                                </Col>
                            </div>   
                        </Row>
                    </Col>
                </Row>
            </div>
        </Container>
        </>
    ); 
};

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};

export default Login;