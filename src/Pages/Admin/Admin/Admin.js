import React, { useState } from 'react';
import MyBooking from '../../MyBooking/MyBooking';
import AddPackage from '../AddPackage/AddPackage';
import ManageBooking from '../ManageBooking/ManageBooking';
import './Admin.css'

const Admin = () => {

    const [admin, setAdmin] = useState("My Booking");

    const handleMyBooking = (e) => {
        setAdmin(e.target.innerText);
        console.log(e.target.innerText);
    }
    const handleManageBooking = (e) => {
        setAdmin(e.target.innerText);
    }
    const handleAddPackage = (e) => {
        setAdmin(e.target.innerText);
    }
    
    return (
        <div className="container">
            <div className="row g-5">
            <section className="col-md-3 container">
                <h3 className="mt-5">Dashbord</h3>
                <div className="m-4 dashbord text-start p-3">

                <div className="" onClick={handleMyBooking}
                style={{ cursor: "pointer", padding: "10px" }}>
                    <h4>My Booking</h4>
                </div>

                <div className="" onClick={handleManageBooking}
                style={{ cursor: "pointer", padding: "10px" }}>
                    <h4>Manage Booking</h4>
                </div>

                <div className="" onClick={handleAddPackage}
                style={{ cursor: "pointer", padding: "10px" }}>
                    <h4>Add Package</h4>
                </div>
                </div>
            </section>
            <section className="col-md-9">
                    {(admin==='My Booking'&& <MyBooking/>) 
                    || (admin==='Manage Booking'&& <ManageBooking/>)
                    || (admin==='Add Package'&& <AddPackage/>)
                    
                    }
            </section>
            </div>
        </div>
    );
};

export default Admin;