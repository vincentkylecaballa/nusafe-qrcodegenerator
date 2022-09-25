import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from "../components/navbar/navbar";


const MyProfile = () => {
    return (
        <>
            <Navigation/>
            <Container>
                <h1>My Profile</h1>
            </Container>
        </>
    );
};

export default MyProfile;
    