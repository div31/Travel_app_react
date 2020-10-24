import React from 'react';
import './SpecialOffers.css';
import {Card, Button, Row, Col} from 'react-bootstrap';

function SpecialOffers(props) {
    return (
        <div>
            <Card>
                <Card.Img className="offer__image" variant="top" src={props.image} alt="" />
                <Card.Body class="offer__body">
                    <Card.Title className="offer__title">{props.title}</Card.Title>
                    <Row>
                        <Col>
                            <Card.Text className="offer__price">
                                Rs. {props.price}
                            </Card.Text>
                        </Col>
                        <Col>
                        <Button className="offer__button" variant="primary">View</Button>
                        </Col>
                        
                    </Row>
                    
                </Card.Body>
            </Card>
        </div>
    )
}

export default SpecialOffers;
