import React from "react";
import { Container, Col, Row, Image, Button, Card, FormGroup, Form } from "react-bootstrap";
import '../../src/styles/myprofile.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from "../components/navbar/navbar";


const MyProfile = () => {
    return (
        <>
            <Navigation/>
            <Container>
                <h1 className="myprofile-txt mt-5">My Profile</h1>

                <Col md={12}>
                    <Row>
                        <Col md={3}>
                            <Image className="profile-photo my-auto" src="https://square-vn.com/app/dscms/assets/images/person-3.jpg?v=1653932875" responsive />
                            <Col md={12}>
                                <Button className='w-75 d-flex justify-content-center mt-2 mb-2'>Upload Profile Photo</Button>
                            </Col>
                            <Col md={12} >
                                <Button className='w-75 d-flex justify-content-center mt-2 mb-2'>Remove Profile Photo</Button>
                            </Col>
                        </Col>
                        <Col md={9}>
                            <Card className='profile-card'>
                                <Card.Header>Account Information</Card.Header>
                                <div className="profile-wrapper">
                                    <Card.Body>
                                        <FormGroup>
                                            <Col md={12}>
                                                <Row>
                                                    <Col md={2}>
                                                        <Form.Label>NU Branch</Form.Label>
                                                    </Col>
                                                    <Col md={10}>
                                                        <Form.Control
                                                            type="text"
                                                        />
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col md={12}>
                                                <Row>
                                                    <Col md={2}>
                                                        <Form.Label>Username</Form.Label>
                                                    </Col>
                                                    <Col md={10}>
                                                        <Form.Control
                                                            type="text"
                                                        />
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col md={12}>
                                                <Row>
                                                    <Col md={6}>
                                                        <Row>
                                                            <Col md={4}>
                                                                <Form.Label>First Name</Form.Label>
                                                            </Col>
                                                            <Col md={8}>
                                                                <Form.Control
                                                                    type="text"
                                                                />
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col md={6}>
                                                        <Row>
                                                            <Col md={4}>
                                                                <Form.Label>Last Name</Form.Label>
                                                            </Col>
                                                            <Col md={8}>
                                                                <Form.Control
                                                                    type="text"
                                                                />
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col md={12}>
                                                <Row>
                                                    <Col md={2}>
                                                        <Form.Label>Email Address</Form.Label>
                                                    </Col>
                                                    <Col md={10}>
                                                        <Form.Control
                                                            type="text"
                                                        />
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </FormGroup>
                                        <Button>Edit Profile</Button>
                                    </Card.Body>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Container>
        </>
    );
};

export default MyProfile;
    