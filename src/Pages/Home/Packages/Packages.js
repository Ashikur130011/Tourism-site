import React from 'react';
import { Row } from 'react-bootstrap';
import useData from '../../../Hooks/useData';
import Package from '../Package/Package';

const Packages = () => {
    const {packages} = useData();

    return (
        <div className="container">
            <h1 className="my-5">Our <span className="text-danger">Packages</span></h1>
            <Row xs={1} md={3} className="g-4 mb-4" >
                {
                    packages.map(s_package =>  <Package
                    key={s_package._id}
                    s_package={s_package}
                    ></Package>)
                }
            </Row>
        </div>
    );
};

export default Packages;