import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import useData from '../../Hooks/useData';

const PackageDetail = () => {
    const {packageId} = useParams();
    /* const {packages} = useData();
    console.log(packages);

    const singlePackage = packages.find(s_package => s_package._id === parseInt(packageId))
    console.log(singlePackage); */
    const [packages, setPackages] = useState([]);

    useEffect( ()=>
    {
        fetch(`http://localhost:5000/packages/${packageId}`)
        .then(res => res.json())
        .then(data => setPackages(data))
    },[])
    return (
        <div className="container py-5">
            <div className="row ">
                <div className="col-md-5">
                    <img src={packages.img} style={{ width: '100%' }} alt="" />
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h1 className="card-title text-primary">{packages.location}</h1>
                        <h3 className="text-success">{packages?.name}</h3>
                        <h5>Available: <span className="text-danger">{packages.available}</span> Packages</h5>
                        <p className="card-text fw-bold">{packages?.description}</p>
                        
                        
                        <div className="border-top border-2 border-danger m-4">
                        <h4>Tour Inclusions</h4>
                        <ul>
                            <li>Accomodation</li>
                            <li>8 Breakfast, 3 Dinners</li>
                            <li>First class Sightseeing</li>
                            <li>Tour Guideline</li>
                        </ul>
                        </div>
                        <div className="d-flex justify-content-around">
                            <Button>Book Now {/* <FontAwesomeIcon icon={faCartPlus}/> */}</Button>
                            <Button>View Package</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageDetail;