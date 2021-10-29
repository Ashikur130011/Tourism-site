import React from 'react';
import tour from '../../../images/sunrise.png';
import travel from '../../../images/travel.png';
import car from '../../../images/car-rental.png';
import hotel from '../../../images/bed.png';


const Banner = () => {
    return (
        <div className="container">
            <div>
                <h1>Plan Your Travel Now!</h1>
                <p>Experience the various exciting tour and travel packages and Make hotel reservations, find vacation packages, search cheap hotels and events</p>
            </div>
            <div className="row mx-auto g-3 w-75">
                <div className="col-md-2">
                <input type="text" className="" placeholder="Enter city" />
                </div>
                <div className="col-md-8">
                <input type="text" name="" id="" placeholder="Search over a million tour and travels, sight seeings, hotels and m..." />
                </div>
                <div className="col-md-2">
                <input type="button" value="Search" />
                </div>
            </div>
            <div className="row w-50 mx-auto">
                <div className="col-md-3">
                    <img src={tour} alt="" width="40" />
                    <p>Tour</p>
                </div>
                <div className="col-md-3">
                    <img src={travel} alt="" width="40" />
                    <p>Flight</p>
                </div>
                <div className="col-md-3">
                    <img src={car} alt="" width="40" />
                    <p>Rent Car</p>
                </div>
                <div className="col-md-3 border ">
                    <img src={hotel} alt="" width="40" />
                    <p>Hotel</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;