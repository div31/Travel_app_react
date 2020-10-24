import React from 'react';
import {Card} from 'react-bootstrap';
import './PopularDestination.css';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

function PopularDestination(props) {
    return (
        <div>
            <Card className="card__full ">
                <Card.Img variant="top" src={props.image} className="pop__img" alt="" />
                <Card.Body className="card__text">
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                    <LocationOnOutlinedIcon /> {props.text}
                    </Card.Text>
                </Card.Body>
            </Card>
             
        </div>
    )
}

export default PopularDestination
