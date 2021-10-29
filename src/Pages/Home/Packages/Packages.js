import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Package from '../Package/Package';

const Packages = () => {
    const [packages, setPackages] = useState([]);

    useEffect( ()=>
    {
        fetch('http://localhost:5000/packages')
        .then(res => res.json())
        .then(data => setPackages(data))
    },[])
    return (
        <div className="container mt-5">
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