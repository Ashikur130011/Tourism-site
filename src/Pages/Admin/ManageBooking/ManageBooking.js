import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';

const ManageBooking = () => {
    const [bookings, setBookings] = useState([]);
    const [spinner,setSpinner]=useState(true)

    useEffect( () => {
        setSpinner(true)
        fetch('https://powerful-hollows-40819.herokuapp.com/booking')
        .then(res => res.json())
        .then(data => {
            setBookings(data)
            setSpinner(false)
        })
    },[]);
    const handleBookingDelete = (id) => {
        const singleBooking = bookings.find(booking => booking._id === id);
        fetch(`https://powerful-hollows-40819.herokuapp.com/bookings/${id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(singleBooking),
        })
          .then((res) => res.json())
          .then((data) => {
              if (data.deletedCount === 1) {
                  const restEvents = bookings.filter(service => service._id !== id);
                  alert('Are you sure?')
                    setBookings(restEvents);
              }
          });
    }
    return (
        <div className="my-4">
            
         <div>
             <h1 className="text-center"><span className="text-danger">Manage</span> Booking</h1>
         {
            spinner? <Spinner animation="grow" variant="success" /> : bookings.map(booking => <Row
                key= {booking._id}>
                    <div className="g-2"></div>
                    <div className="col-md-3 p-2 bg-secondary border-bottom text-white">Name: {booking.Name}</div>
                    <div className="col-md-4 p-2 border-bottom border-dark booking-bg">Destination: {booking.Destination}</div>
                    <div className="col-md-2 p-2 border-bottom bg-secondary text-white">Date: {booking.Date}</div>
                   
                    <div className="col-md-2"><button className="bg-danger border-3 border-success text-white rounded-pill px-4 fw-bold" onClick={() => handleBookingDelete(booking._id)}>Cancel</button></div>
                    
            </Row>)
         }
         </div>
      </div>
    );
};

export default ManageBooking;