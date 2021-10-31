import React from 'react';
import { Col, Form, Row, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faAddressCard, 
    faBuilding, 
    faComment, 
    faPhone, 
    faTasks 
    } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
    return (
        <div className="container">
            <div className="row pt-5">
                <div className="col-md-4 my-4">
                    <h2>Got any</h2>
                    <h2 className="border-bottom border-2 border-danger">Questions?</h2>
                    <br />
                    <p><FontAwesomeIcon icon={faAddressCard}/>1203, Town Center,
                       Drive FL 33458 United States
                    </p>
                    <p><FontAwesomeIcon icon={faPhone}/>
                    0123-456-789,
                    841 123 456 78
                    </p>
                </div>
                <div className="col-md-7 contact-form">
                    <h1>Contact Us <FontAwesomeIcon icon={faTasks}/></h1>
                        <Form style={{ width: '80%' }} className="contact-form p-3 mx-auto">
                            <Form>
                                <Row className="mb-4">
                                <Form.Label className=" fw-bold">Name</Form.Label>
                                    <Col>
                                    <Form.Control placeholder="name*" />
                                    </Col>
                                    
                                </Row>
                        </Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="fw-bold">Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                        <Form.Label className='fw-bold mb-3'>Message</Form.Label>
                            <Form.Control as="textarea" placeholder="Add your message"  rows={3} />
                        
                            <Button className="mt-3" variant="success" type="submit">
                                Message <FontAwesomeIcon icon={faComment}/>
                            </Button>
                        </Form>
                </div>
            </div>
        </div>
    );
};

export default Contact;