import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import './MyBooking.css'

const MyBooking = () => {
    const [bookings, setBookings] = useState([])
    const {user} = useAuth();
    useEffect( () => {
        fetch(`https://powerful-hollows-40819.herokuapp.com/booking/${user.email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    },[])
    console.log(bookings);

    const bookingCancel = (id) =>{
        console.log(id);
        axios.delete(`https://powerful-hollows-40819.herokuapp.com/${id}`)
        .then((res) => {
          if (res.data.deletedCount === 1) {
            const restItem = bookings.filter((event) => event._id !== id);
            setBookings(restItem);
            alert("Are you sure?");
          }
        })
    }
    return (
        <div className="my-5">
        <h1>My Bookings</h1>
            <div className=" ">
            {
                bookings.map(booking => 
                <Row
                    key= {booking._id}>
                    <div className="g-2"></div>
                    <div className="col-md-2 p-2 bg-secondary border-bottom text-white fw-bold">Name: {booking.Name}</div>
                    <div className="col-md-2 p-2 border-bottom border-dark booking-bg text-white">Date: {booking.Date}</div>
                    <div className="col-md-1 p-2 border-bottom border-dark bg-secondary text-white">Adult: {booking.Adult}</div>
                    <div className="col-md-1 p-2 border-bottom border-dark booking-bg text-white">Child: {booking.Children}</div>
                    <div className="col-md-3 p-2 border-bottom border-secondary bg-secondary text-white fw-bold">Destination: {booking.Destination}</div>
                    <div className="col-md-2"><button className="bg-danger border-3 border-success text-white rounded-pill px-4 fw-bold" onClick={() => bookingCancel(booking._id)}>Cancel</button></div>
                </Row>)
            }
            </div>
        </div>
    );
};

export default MyBooking;