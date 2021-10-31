import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useData from '../../../Hooks/useData';
import Banner from '../Banner/Banner';
import Package from '../Package/Package';
import Packages from '../Packages/Packages';
import USA from '../../../images/New folder/USA.jpg';
import Offer from '../../../images/New folder/offer.jpg';
import Dubai from '../../../images/New folder/Dubai.jpg';
import Europe from '../../../images/New folder/Europe.jpg';
import India from '../../../images/New folder/India.jpg';
import './Home.css'

const Home = () => {
    const{packages} = useData()
    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto">
                {/* ------Feature Products----- */}
                <div className="row">
                <div className="col-md-12">
                    <h1 className="text-primary mb-4">Top Tour Packages</h1>
                    <h5 className="mb-5 border-bottom border-primary pb-5">World's leading tour and travels Booking website,Over 30,000 packages worldwide.</h5>
                        <Row xs={1} md={3} className="g-4 mb-4">
                                {
                                    packages.map(s_package =>  <Package
                                        key={s_package._id}
                                        s_package={s_package}
                                        ></Package>)
                                } 
                            </Row>
                            <Link  to="/packages">
                                <Button className="bg-danger border-3 border-success text-white px-5 rounded-pill">See More </Button>
                            </Link>
                        </div> 
                </div>
                <div className="row my-5 pt-3">
                    <h1 className="text-danger pb-3">Popular Cities</h1>
                    <h5 className="pb-5">World's leading Hotel Booking website,Over 30,000 Hotel rooms worldwide. Book Hotel rooms and enjoy your holidays with distinctive experience</h5>
                    <div className="col-md-4">
                        <div className="d-flex justify-content-around text-down align-items-center bg_1">
                            <h5 className="mt-5">12 Packages</h5>
                            <div className="mt-5">
                                <h2>Europe</h2>
                                <h6>Starting from $2400</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex justify-content-around text-down align-items-center bg_2">
                            <h5 className="mt-5">12 Packages</h5>
                            <div className="mt-5">
                                <h2>Dubai</h2>
                                <h6>Starting from $2000</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex justify-content-around text-down align-items-center bg_3">
                            <h5 className="mt-5">12 Packages</h5>
                            <div className="mt-5">
                                <h2>London</h2>
                                <h6>Starting from $3400</h6>
                            </div>
                        </div>
                    </div>
                    
                </div>
                {/* -------------- */}
                
                {/* -------------- */}
                <div>
                <Carousel className="mb-5">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Dubai}
      alt="First slide"
    />
    <Carousel.Caption>
      <h2 className="fw-bold text-warning">Dubai</h2>
      <p className="text-warning">Dubai is one of the most beautiful cities in the world as a result there's an ample amount of traveler influx into the city. </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={USA}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h2 className="fw-bold text-warning">New York, USA</h2>
      <p className="text-warning">New York City is like no other city in the world, and one that must be experienced to be fully appreciated.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Europe}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h2 className="fw-bold text-warning">Europe</h2>
      <p className="text-warning">European countries have had time to perfect urban planning and get public transport under control. This makes getting around so easy! </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                </div>
            </div>

        </div>
    );
};

export default Home;