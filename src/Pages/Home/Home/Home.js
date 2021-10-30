import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useData from '../../../Hooks/useData';
import Banner from '../Banner/Banner';
import Package from '../Package/Package';
import Packages from '../Packages/Packages';

const Home = () => {
    const{packages} = useData()
    return (
        <div>
            <Banner></Banner>
            <div className="container row mx-auto">
                {/* ------Feature Products----- */}
                <div className="col-md-12">
                    <h1 className="text-primary mb-4">Top Tour Packages</h1>
                        <Row xs={1} md={3} className="g-4 mb-4">
                                {
                                    packages.map(s_package =>  <Package
                                        key={s_package._id}
                                        s_package={s_package}
                                        ></Package>)
                                } 
                            </Row>
                            <Link  to="/packages">
                                <Button>See More </Button>
                            </Link>
                        </div>
                        
            </div>
        </div>
    );
};

export default Home;