import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';


const MyBooking = () => {
    const [bookings, setBookings] = useState([])
    const {user} = useAuth();
    useEffect( () => {
        fetch(`http://localhost:5000/booking/${user.email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    },[])
    console.log(bookings);

    const bookingCancel = (id) =>{
        console.log(id);
        axios.delete(`http://localhost:5000/booking/${id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            const restItem = bookings.filter((event) => event._id !== id);
            setBookings(restItem);
            alert("Event deleted successfully");
          }
        })
    }
    return (
        <div className="container m-5">
            <h1>My Bookings</h1>
            <div className="p-2">
            {
                bookings.map(booking => <Row
                key= {booking._id}>
                    <div className="col-md-2">{booking.Name}</div>
                    <div className="col-md-3">{booking.Destination}</div>
                    <div className="col-md-2">{booking.Date}</div>
                    <div className="col-md-1">{booking.Adult}</div>
                    <div className="col-md-1">{booking.Children}</div>
                    <div className="col-md-3"><button className="bg-danger border-3 border-success text-white rounded-pill px-4 fw-bold" onClick={() => bookingCancel(booking._id)}>Cancel</button></div>
                    
                </Row>)
            }
            </div>
        </div>
    );
};

export default MyBooking;