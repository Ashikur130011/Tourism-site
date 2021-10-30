import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Package.css'

const Package = ({s_package}) => {
    const {_id, img, name, description, location} =s_package;
    return (
        <div>
             <Card className="card-body">
            <div className='mx-auto border-2' style={{ width: '100%' }}>
            <Card.Img variant="top" src={img} />
            </div>
            <Card.Body>
                <Card.Title>
                {location}
                </Card.Title>
            <Card.Text>
            {description.slice(0,150)}
            </Card.Text>
            </Card.Body>
            
            <h6>{name}</h6>
            <div className="pb-4">
            <Link to ={`/details/${_id}`}>
                <Button variant="primary">Book Now</Button>
            </Link>
            </div>
            </Card>
        </div>
    );
};

export default Package;