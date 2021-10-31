import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Package.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';

const Package = ({s_package}) => {
    const {_id, img, name, description, location} =s_package;
    return (
        <div>
             <Card className="card-body">
            <div className='mx-auto border-2' style={{ width: '20rem' }}>
            <Card.Img variant="top" src={img} />
            </div>
            <Card.Body>
                <Card.Title className="border-bottom border-3 pb-1">
                {location}
                </Card.Title>
            <Card.Text>
            {description.slice(0,140)}
            </Card.Text>
            <span className="text-warning">
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
            </span>
            </Card.Body>
            
            <h6>{name}</h6>
            <div className="">
            <Link to ={`/details/${_id}`}>
                <Button variant="primary" className="bg-primary border-3 border-success text-white rounded-pill px-4">Book Now</Button>
            </Link>
            </div>
            </Card>
        </div>
    );
};

export default Package;