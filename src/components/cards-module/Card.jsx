import React from "react";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../styles/card.scss'

const Module = () => {
    const cardDetails = [
        {
            title: "My QR Code",
            description: "Generate your QR Code",
            image: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        },
        {
            title: "My QR Code",
            description: "Generate your QR Code",
            image: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        },
    ]

    const renderCard = (card, index) => {
        return (
        <Card style={{ width: "25rem", height: "10rem" }} key={index} className="box">
            <Card.Img
            variant="top"
            src={card.image}
            />
            <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.description}</Card.Text>
            </Card.Body>
        </Card>
        );
    };

    return <div className="grid">{
        cardDetails.map(renderCard)
    }</div>;
};  

export default Module;
