import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import './MyBooking.css'

const MyBooking = () => {
    const [bookings, setBookings] = useState([]);
    const [spinner,setSpinner]=useState(true);
    const {user} = useAuth();
    useEffect( () => {
        setSpinner(true)
        fetch(`https://powerful-hollows-40819.herokuapp.com/booking/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setBookings(data)
                setSpinner(false)
            });
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
        <h1>
          My <span className="text-danger">Bookings</span>
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
                  <th scope="col">Audult</th>
                  <th scope="col">Child</th>
                  <th scope="col">Destination</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              {bookings.map((booking) => (
                <tbody>
                  <tr>
                    <td>{booking.Name}</td>
                    <td>{booking.Date}</td>
                    <td>{booking.Adult}</td>
                    <td>{booking.Children}</td>
                    <td>{booking.Destination}</td>
                    <td>
                      <button
                        className="bg-danger border-success text-white rounded px-2 fw-bold"
                        onClick={() => bookingCancel(booking._id)}
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
    );
};

export default MyBooking;