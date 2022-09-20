import Navigation  from "../components/navbar/navbar";
import React from "react";
import {Container, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../src/styles/dashboard.scss';
import Module from '../components/cards-module/Card';

const Dashboard = () => {
    return (
        <>
            <Navigation />
            <Container>
                <h2 className="nusafe-text mt-5">My Dashboard</h2>
            </Container>
            <Container>
                <Row className="mt-5">
                    <Module/>
                </Row>
            </Container>
        </>
    );
}

export default Dashboard;