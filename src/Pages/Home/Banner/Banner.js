import React from 'react';
import tour from '../../../images/sunrise.png';
import travel from '../../../images/travel.png';
import car from '../../../images/car-rental.png';
import hotel from '../../../images/bed.png';
import './Banner.css'


const Banner = () => {
    return (
        <div className="container banner-body">
            <div>
                <h1>Plan Your Travel Now!</h1>
                <p>Experience the various exciting tour and travel packages and Make hotel reservations, find vacation packages, search cheap hotels and events</p>
            </div>
            <div class="input-group w-75 mx-auto">
            <input type="text" className="me-2" placeholder="Enter city" />
            <input type="text" className="me-2 w-50" placeholder="Search over a million tour and travels, sight seeings, hotels and m..." />
            <input type="button" className="w-25" value="Search" />
            </div>
            
            <div className="row w-50 mx-auto">
                <div className="col-md-3">
                    <img src={tour} alt="" width="36" />
                    <p>Tour</p>
                </div>
                <div className="col-md-3">
                    <img src={travel} alt="" width="36" />
                    <p>Flight</p>
                </div>
                <div className="col-md-3">
                    <img src={car} alt="" width="36" />
                    <p>Rent Car</p>
                </div>
                <div className="col-md-3">
                    <img src={hotel} alt="" width="36" />
                    <p>Hotel</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;