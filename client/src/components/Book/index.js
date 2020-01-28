import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";

function Book({title, authors, description, image, link, Button}) {
    return (
        <ListItem>
            <Row className="wrapper">
                <Col size="md-8">
                    <h3>{title}</h3>
                </Col>
                <Col size="md-6">
                    <p>Written by {authors}</p>
                </Col>
                <Col size="md-6">
                    <img className="thumbnail" src={image} alt={title} />
                </Col>
                <Col size="md-6">
                    <p>Description: {description}</p>
                </Col>
                <Col size="md-6">
                    <div className="viewBtn">
                        <a className="btn" href={link}>
                            Learn More
                        </a>
                    </div>
                </Col>
            </Row>
        </ListItem>
    )
}

export default Book;