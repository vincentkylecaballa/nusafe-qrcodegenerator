import Navigation from '../components/navbar/navbar';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap'

const QrcodeHistory = () => {
    return (
        <div>
            <Navigation/>
            <Container>
                <h1>QR Code History</h1>
            </Container>
        </div>
    );
};


export default QrcodeHistory;