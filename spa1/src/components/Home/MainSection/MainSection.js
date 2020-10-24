import React from 'react';
import './MainSection.css';
import {Container, Form, Col, Button} from 'react-bootstrap'

function MainSection() {
    return (
            <Container>
                <div className="main-section">
                    <h1 className="main-text">Let's Make Your Best Trip Ever!</h1>
                    <p className="main-para">The best travel for your journey respectful of the environment.</p>
                    <div className="form-main">
                        <Form>
                            <Form.Row>
                                <Form.Group className="col-md-12">
                                    <Form.Label className="form-name">Enter Destination</Form.Label>
                                    <Form.Control placeholder="..." />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="dob">
                                        <Form.Label className="form-name">From:</Form.Label>
                                        <Form.Control type="date" name="dob" placeholder="Date of birth" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="dob">
                                        <Form.Label className="form-name">To:</Form.Label>
                                        <Form.Control type="date" name="dob" placeholder="Date of birth" />
                                        
                                    </Form.Group>
                                    
                                </Col>
                                
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                <Button variant="primary" className="form-button">Search</Button>
                                </Col>
                            </Form.Row>
                           
                        </Form>
                    </div>
                    
                </div>
           </Container>  
    )
}

export default MainSection
