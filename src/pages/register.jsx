import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Dropdown, DropdownButton, Form } from 'react-bootstrap';
import UnivLogo from "../assets/images/nu-logo.png"
import '../styles/register.scss'

const Register = () => {
    return ( 
    <>
        <Container fluid>
            <div className='register-wrapper'>
                <Row>
                    <Col md={6} className="register-page">
                        <h1 className='register-title text-center'>Create New Account</h1>
                        <p className='register-desc text-center'>Create your credentials to access the NU SAFETrace QR Code Generator Portal</p>
                       
                        <Form> 
                            <DropdownButton id='register-dropdown' title='Select NU Branch'>
                                <Dropdown.Item href="#/action-1">National University - Manila Campus</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">NU Baliwag</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">NU Clark</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">NU Dasmariñas</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">NU Fairview</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">NU Laguna</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">NU MOA</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">NU Nazareth School</Dropdown.Item>
                            </DropdownButton>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text' placeholder='Enter Username' />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text' placeholder='Enter Email Address' />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text' placeholder='Enter First Name' />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text' placeholder='Enter Last Name' />
                            </Form.Group>

                            <p className='register-disclaimer text-center'>
                                8 Characters minimum, atleast one upper case letter (A-Z), atleast one lower case letter (a-z), atleast one special character 
                            </p> 
                            <Form.Group className='mb-3'>
                                <Form.Control type='password' placeholder='Enter Password' />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='password' placeholder='Confirm Password' />
                            </Form.Group>
                            <Button className='login-button' variant='primary' type='submit'>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col md={6} className='design-register-page'>
                        <Row>
                            <div className='register-right'>
                                <Col md={12} lg={12}>
                                    <img className="nu-logo-register" src={UnivLogo} alt="NU Logo" />
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

export default Register;