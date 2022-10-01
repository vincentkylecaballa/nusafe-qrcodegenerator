import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../styles/card.scss'
import { AiOutlineQrcode, AiOutlineHistory } from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg'

const Module = () => {
    const cardDetails = [
        {
            title: "Create QR Code",
            icon: <AiOutlineQrcode size={96} color="#35408f"/>,
        },
        {
            title: "QR Code History",
            icon: <AiOutlineHistory size={96} color="#35408f"/>
        },
        {
            title: "My Profile",
            icon: <CgProfile size={96} color="#35408f" display="flex" vertical-align="center"/>
        },
    ]

    const renderCard = (card, index) => {
        return (
        <a style={{ cursor: 'pointer' }} onClick={index}>
            <Card style={{ width: "20rem", height: "10rem" }} key={index} className="card-module flex">
                <Row>
                    <Col md={4}>
                        <div className='card-icon m-3'>
                            {card.icon}
                        </div>
                    </Col>
                    <Col md={8}>
                        <Card.Body>
                            <Card.Title>{card.title}</Card.Title>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </a>
        );
    };

    return <div className="grid">{
        cardDetails.map(renderCard)
    }</div>;
};  

export default Module;
