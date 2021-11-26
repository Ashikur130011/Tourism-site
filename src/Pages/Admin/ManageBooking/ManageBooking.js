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
          <h1 className="text-center">
            <span className="text-danger">Manage</span> Booking
          </h1>
          {spinner ? (
            <Spinner animation="grow" variant="success" />
          ) : (
            <div class="table-responsive">
              <table class="table ">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Destination</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                {bookings.map((booking) => (
                  <tbody>
                    <tr>
                      <td>{booking.Name}</td>
                      <td>{booking.Date}</td>
                      <td>{booking.Destination}</td>
                      <td>
                        <button
                          className="bg-danger border-success text-white rounded px-2 fw-bold"
                          onClick={() => handleBookingDelete(booking._id)}
                        >
                          Cancel
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          )}
        </div>
      </div>
    );
};

export default ManageBooking;