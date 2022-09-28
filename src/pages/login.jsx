import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Dropdown, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UnivLogo from "../assets/images/nu-logo.png"
import '../styles/login.scss'

const Login = () => {
    return ( 
    <>
        <Container fluid>
            <div className='login-wrapper'>
                <Row>
                    <Col md={6} className="login-page">
                        <h1 className='login-title'>Welcome Back!</h1>
                        <p className='login-desc'>Log In to access the NU SAFETrace QR Code Geerator portal</p>
                        <Dropdown>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">National University - Manila Campus</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">NU Baliwag</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">NU Clark</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">NU Dasmariñas</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">NU Fairview</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">NU Laguna</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">NU MOA</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">NU Nazareth School</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Form>
                            <Form.Group className='mb-3'>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type='text' placeholder='Enter username' />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' placeholder='Enter password' />
                            </Form.Group>
                            <a>Forgot Password?</a>
                            <Button className='login-button' variant='primary' type='submit'>
                                Submit
                            </Button>
                            <Link to='/register'>No account yet? Sign Up.</Link>
                            <p className='login-disclaimer'>
                            All modules, contents and services included in this system is intended for Nationalians' use only. You may not, except with our express written permission, distribute or commercially exploit its contents. Nor may you transmit it or store it in any other website or other form of electronic retrieval system. NU SAFE Development Team © 2022.
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

export default Login;