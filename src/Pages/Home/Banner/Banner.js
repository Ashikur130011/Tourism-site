import React from 'react';
import tour from '../../../images/sunrise.png';
import travel from '../../../images/travel.png';
import car from '../../../images/car-rental.png';
import hotel from '../../../images/bed.png';
import './Banner.css'


const Banner = () => {
    return (
        <div>
            <div className="banner-body">
            <div className="container">
            <div>
                <h1 className="mt-5 mb-4 fst-italic fw-bold">Plan Your Travel Now!</h1>
                <p className="w-50 mx-auto fw-bold text-white fs-5">Experience the various exciting tour and travel packages and Make hotel reservations, find vacation packages, search cheap hotels and events</p>
            </div>
            <div class="input-group w-75 mx-auto">
            <input type="text" className="me-2 py-2" placeholder="Enter city" />
            <input type="text" className="me-2 w-50" placeholder="Search over a million tour and travels, sight seeings, hotels and m..." />
            <input type="button" className="w-25 input-btn" value="Search" />
            </div>
            
            
        </div>
        </div>
        <div className="row w-50 mt-5 mx-auto">
        <div className="col-md-3 ">
            <img src={tour} alt="" className="banner-icon" width="60" />
            <p>Tour</p>
        </div>
        <div className="col-md-3">
            <img src={travel} alt="" className="banner-icon" width="60" />
            <p className="text-danger fw-bold ">Flight</p>
        </div>
        <div className="col-md-3">
            <img src={car} alt="" className="banner-icon" width="60" />
            <p>Rent Car</p>
        </div>
        <div className="col-md-3">
            <img src={hotel} alt="" className="banner-icon" width="60" />
            <p>Hotel</p>
        </div>
    </div>
        </div>
    );
};

export default Banner;