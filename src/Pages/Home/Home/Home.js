import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
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
                    <h5>World's leading tour and travels Booking website,Over 30,000 packages worldwide.</h5>
                        <Row xs={1} md={3} className="g-4 mb-4">
                                {
                                    packages.map(s_package =>  <Package
                                        key={s_package._id}
                                        s_package={s_package}
                                        ></Package>)
                                } 
                            </Row>
                            <Link  to="/packages">
                                <Button className="bg-danger border-3 border-success text-white rounded-pill">See More </Button>
                            </Link>
                        </div> 
                </div>
                <div className="row my-5 pt-3">
                    <h1>Popular Cities</h1>
                    <h5>World's leading Hotel Booking website,Over 30,000 Hotel rooms worldwide. Book Hotel rooms and enjoy your holidays with distinctive experience</h5>
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
                <div>
                    <img src={Offer} alt="" />
                </div>
                {/* -------------- */}
                <div>
                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={Dubai} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={USA} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={India} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                </div>
            </div>

        </div>
    );
};

export default Home;