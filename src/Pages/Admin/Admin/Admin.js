import React, { useState } from 'react';
import MyBooking from '../../MyBooking/MyBooking';
import AddPackage from '../AddPackage/AddPackage';
import ManageBooking from '../ManageBooking/ManageBooking';
import './Admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPlus, faServer, faClipboardList, faEdit} from '@fortawesome/free-solid-svg-icons';

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
        <div className="mx-5">
            <div className="row ">
            <section className="col-md-3">
                <h3 className="mt-5"><FontAwesomeIcon icon={faServer}/> Dashbord</h3>
                <div className=" dashbord text-start ">

                <div className="" onClick={handleMyBooking}
                style={{ cursor: "pointer", padding: "10px" }}>
                    <h5><FontAwesomeIcon icon={faClipboardList}/>My Booking</h5>
                </div>

                <div className="" onClick={handleManageBooking}
                style={{ cursor: "pointer", padding: "10px" }}>
                    <h5><FontAwesomeIcon icon={faEdit}/>Manage Booking</h5>
                </div>

                <div className="" onClick={handleAddPackage}
                style={{ cursor: "pointer", padding: "10px" }}>
                    <h5><FontAwesomeIcon icon={faPlus}/>Add Package</h5>
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