import React from "react";
import UnivLogo from "../../assets/images/nu-logo.png";
import {Navbar, Col, Row, Container, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FiLogOut } from "react-icons/fi";
import '../../styles/navbar.scss'

const Navigation = () => {
    return(
        <>
            <Navbar bg="white" className="shadow" expand="md">
                <Container>
                    <Navbar.Brand>
                        <Row>
                            <Col md={4}>
                                <img className="nu-logo" src={UnivLogo} alt="NU Logo" />
                            </Col>
                            <Col md={8}>
                                <Row>
                                    <div className="brand-text">
                                        <h6 className="text-logo-top">NU SAFETrace</h6>
                                        <h6 className="text-logo-bottom">QR Code Generator</h6>
                                    </div> 
                                </Row>
                            </Col>
                        </Row>
                    </Navbar.Brand>
                    <Button className='navbar-btn'><FiLogOut/>Logout</Button>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;