import React, { useState } from 'react';
import './App.css';

function App() {

  
  const [currentPage, setCurrentPage] = useState('login');
  const [loginDetails, setLoginDetails] = useState({ rollNo: '', email: '' });
  const [travelDetails, setTravelDetails] = useState({
    intimationTime: '',
    pickupLocation: '',
    destination: '',
  });
  const [bookedRide, setBookedRide] = useState(null);
  const rides = [
    {
      studentName: 'Rahul.k',
      rollNo: '220711A0480',
      phoneNo: '987654xxxx',
      email: 'rahulk@mail.com',
    },
    {
      studentName: 'Geetha.M',
      rollNo: '21071A0156',
      phoneNo: '123456xxxx',
      email: 'mgeetha@mail.com',
    },
  ];

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setCurrentPage('travelIntimation');
  };

  const handleTravelSubmit = (e) => {
    e.preventDefault();
    setCurrentPage('rides');
  };

  const bookRide = (ride) => {
    setBookedRide(ride);
    setCurrentPage('confirmation');
  };

  const confirmRide = () => {
    alert('Ride Confirmed. Have a safe journey!');
    setCurrentPage('login');
    setLoginDetails({ rollNo: '', email: '' });
    setTravelDetails({ intimationTime: '', pickupLocation: '', destination: '' });
    setBookedRide(null);
  };

  return (
    <div className="App">
    <header>
      <h1>The Ride-Hive</h1>
      <p>Effortless College Travel - VNRVJIET</p>
    </header>
      {currentPage === 'login' && (
        <section id="loginPage">
          <h2>Login to Your Account</h2>
          <br />
          <form onSubmit={handleLoginSubmit}>
            <label htmlFor="rollNoLogin">Roll Number:</label>
            <input
              type="text"
              id="rollNoLogin"
              placeholder="Enter your Roll Number"
              value={loginDetails.rollNo}
              onChange={(e) => setLoginDetails({ ...loginDetails, rollNo: e.target.value })}
              required
            />
 
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={loginDetails.email}
              onChange={(e) => setLoginDetails({ ...loginDetails, email: e.target.value })}
              required
            />

          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
          />
            <button type="submit">Login</button>
          </form>
        </section>
      )}

      {currentPage === 'travelIntimation' && (
        <section id="travelIntimationPage">
          <h2>Travel Intimation</h2>
          <br />
          <form onSubmit={handleTravelSubmit}>
            <label htmlFor="intimationTime">Travel Time (Enter in advance):</label>
            <input
              type="datetime-local"
              id="intimationTime"
              value={travelDetails.intimationTime}
              onChange={(e) => setTravelDetails({ ...travelDetails, intimationTime: e.target.value })}
              required
            />

            <label htmlFor="pickupIntimation">Pickup Location:</label>
            <input
              type="text"
              id="pickupIntimation"
              placeholder="Enter Pickup Location"
              value={travelDetails.pickupLocation}
              onChange={(e) => setTravelDetails({ ...travelDetails, pickupLocation: e.target.value })}
              required
            />

            <label htmlFor="destinationIntimation">Destination:</label>
            <input
              type="text"
              id="destinationIntimation"
              placeholder="Enter Destination"
              value={travelDetails.destination}
              onChange={(e) => setTravelDetails({ ...travelDetails, destination: e.target.value })}
              required
            />

            <button type="submit">Notify Rides</button>
          </form>
        </section>
      )}

      {currentPage === 'rides' && (
        <section id="ridesPage">
          <h2>Available Rides</h2>
          <br />
          <ul id="rideList">
            {rides.map((ride, index) => (
              <li key={index}>
                <p>Name: {ride.studentName}</p>
                <p>Roll No: {ride.rollNo}</p>
                <p>Phone: {ride.phoneNo}</p>
                <p>Email: {ride.email}</p>
                <button onClick={() => bookRide(ride)}>Book Ride</button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {currentPage === 'confirmation' && (
        <section id="rideConfirmationPage">
          <h2>Ride Confirmation</h2>
          {bookedRide && (
            <div>
              <p>Ride booked successfully!</p>
              <p><strong>Student Name:</strong> {bookedRide.studentName}</p>
              <p><strong>Roll Number:</strong> {bookedRide.rollNo}</p>
              <p><strong>Phone Number:</strong> {bookedRide.phoneNo}</p>
              <p><strong>Email:</strong> {bookedRide.email}</p>
              <p><strong>Pickup Location:</strong> {travelDetails.pickupLocation}</p>
              <p><strong>Destination:</strong> {travelDetails.destination}</p>
              <p><strong>Intimation Time:</strong> {travelDetails.intimationTime}</p>
              <button onClick={confirmRide}>Confirm Ride</button>
            </div>
          )}
        </section>
      )}
    </div>
  );
}

export default App;
