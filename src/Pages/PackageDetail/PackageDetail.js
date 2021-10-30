import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PackageDetail = () => {
    const {packageId} = useParams();
    const [packages, setPackages] = useState([]);
    const { register, handleSubmit, reset } = useForm();
    const {user} = useAuth();

console.log(packageId);
    useEffect( ()=>
    {
        fetch(`http://localhost:5000/packages/${packageId}`)
        .then(res => res.json())
        .then(data => setPackages(data))
    },[])

    

  const onSubmit = data => {
    console.log(data);

    axios.post('http://localhost:5000/booking', data)
      .then(res => {
          console.log(res.data);
        if(res.data.insertedId) {
          alert('Booking added successfully');
          reset();
        }
      })
  }

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

            <div className="w-75 border border-4 border-warning shadow-lg mx-auto mt-5">
          <h2 className="fw-bold text-warning pt-4">Book Your Trip Now</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="d-flex flex-column w-75 mx-auto my-4"
          >
            <input {...register("Name")} value={user.displayName || ""} className="mb-2 fs-5 fw-bold" />
            <input {...register("Email")} value={user.email || ""} className="mb-2 fw-bold" />

            <input {...register("Destination")} value={packages.location || ""} className="mb-2 fw-bold"
            />

            <input {...register("Date")} type="date" required className="mb-2 fw-bold" />

            <input {...register("Adult")} type="number" required className="mb-2 fw-bold" placeholder="Adult" />

            <input {...register("Children")} type="number" required className="mb-2 fw-bold" placeholder="Child" />



            <button className="btn btn-success my-4">Purchase</button>
          </form>
        </div>
        </div>
    );
};

export default PackageDetail;