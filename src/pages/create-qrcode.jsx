import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from "../components/navbar/navbar";


const CreateQRCode = () => {
    return (
        <>
            <Navigation/>
            <Container>
                <h1>Create QR Code</h1>
            </Container>
        </>
    );
};

export default CreateQRCode;
    