import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Dropdown, DropdownButton, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UnivLogo from "../assets/images/nu-logo.png"
import '../styles/register.scss'

const Register = () => {
    const [branch, setBranch] = React.useState();
    const [username, setUsername] = React.useState();
    const [emailAddres, setEmailAddress] = React.useState();
    const [firstName, setFirstName] = React.useState();
    const [lastName, setLastName] = React.useState();

    return ( 
    <>
        <Container fluid>
            <div className='register-wrapper'>
                <Row>
                    <Col md={6} className="register-page">
                        <h1 className='register-title text-center'>Create New Account</h1>
                        <p className='register-desc text-center'>Create your credentials to access the NU SAFETrace QR Code Generator Portal</p>
                        <Form> 
                            <Form.Control as='select' value={type} className='mb-3'
                            onChange={e => setBranch(e.target.value)}>
                                <option>National University - Manila</option>
                                <option>NU Baliwag</option>
                                <option>NU Dasmarinas</option>
                                <option>NU Fairview</option>
                                <option>NU Laguna</option>
                                <option>NU Lipa</option>
                                <option>NU MOA</option>
                                <option>NU Nazareth</option>
                            </Form.Control>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text' placeholder='Enter Username' 
                                onChange={(e) => setUsername(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Control type='text' placeholder='Enter Email Address' 
                                onChange={(e) => setEmailAddress(e.target.value)}/>
                            </Form.Group>
                            <Col md={12}>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className='mb-3'>
                                            <Form.Control type='text' placeholder='Enter First Name' 
                                            onChange={(e) => setFirstName(e.target.value)}/>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className='mb-3'>
                                            <Form.Control type='text' placeholder='Enter Last Name' 
                                                onChange={(e) => setLastName(e.target.value)}/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Col>

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
                        <Link to='/login'>Have an account? Sign In.</Link>
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