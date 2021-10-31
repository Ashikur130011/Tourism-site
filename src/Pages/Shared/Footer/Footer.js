import React from 'react';
import f_logo from '../../../images/logo.png';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faAddressCard, 
    faEnvelopeSquare, 
    faTasks 
    } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="container-fluid bg-dark">
            <div className="row mx-auto py-3">
            <div className="col-md-3">
                <img src={f_logo} alt="" />
                <p className="fw-bold text-warning">We take care of every aspect of your trip, from your flights and hotel to ground transportation and excursions.</p>
                <h6 className="text-warning"><FontAwesomeIcon icon={faTasks}/>e Opentime : Monday - Friday: 9:00-20.00</h6>
            </div>
            <div className="col-md-3">
                <h2 className="text-danger">SUPPORT & HELP</h2>
                <h6 className="text-warning">Privacy</h6>
                <h6 className="text-warning">Shipping Options</h6>
                <h6 className="text-warning">Terms</h6>
                <h6 className="text-warning">My Account</h6>
                <h6 className="text-warning">Return Policy</h6>
            </div>
            <div className="col-md-3">
                <h2 className="text-danger">QUICK SHOP</h2>
                <h6 className="text-warning">Disposable Gloves</h6>
                <h6 className="text-warning">Cleaning Scissor</h6>
                <h6 className="text-warning">Scissors</h6>
                <h6 className="text-warning">Pedometer</h6>
                <h6 className="text-warning">Our Shop</h6>
            </div>
            <div className="col-md-3">
                <h2 className="text-danger">FOLLOW US</h2>
                <h6 className="text-warning"><FontAwesomeIcon icon={faAddressCard}/> Address: 58 A, East Madison Street, Baltimore, Call us: (01) +911 45658687</h6>
                <h5 className="text-warning">MD, USA 4508</h5>
                <p className="text-warning"><FontAwesomeIcon icon={faEnvelopeSquare}/> theTravel@gmail.com</p>
            </div>
        </div>
    </div>
       
    );
};

export default Footer;