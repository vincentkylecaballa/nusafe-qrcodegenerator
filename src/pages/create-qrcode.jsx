import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/createqrcode.scss'
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import Navigation from "../components/navbar/navbar";


const CreateQRCode = () => {
    return (
        <>
            <Navigation/>
            <Container>
                <h1 className='dashboard-title mt-5'>Generate QR Code</h1>

                <Row>
                    <Col md={6}>
                            <Card className="qrcode-card"> 
                                <Card.Header>NU SAFETRACE DETAILS</Card.Header>
                                <div className='qrcode-wrapper'>
                                    <Card.Body>
                                        <Form>
                                            <Form.Group controlId="generateQRCode">
                                                <Form.Label htmlFor="nu-branch">NU Branch</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="nu-branch"
                                                />
                                            </Form.Group> 
                                            <Form.Group controlId="generateQRCode"> 
                                                <Form.Select>       
                                                    <option id="powerapps-type">Choose NU SAFE PowerApps</option>
                                                    <option value="1">NU SAFE for Employees</option>
                                                    <option value="2">NU SAFE for Students</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group controlId="generateQRCode">
                                                <Form.Label htmlFor="nu-branch">Location</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="nu-branch"
                                                />
                                            </Form.Group> 
                                        </Form>    
                                    </Card.Body>
                                </div>
                            </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="qrcode-card">
                            <Card.Header>PREVIEW QR CODE</Card.Header>
                            <div className="previewqr-wrapper">
                                <Button>GENERATE QR CODE</Button>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default CreateQRCode;
    