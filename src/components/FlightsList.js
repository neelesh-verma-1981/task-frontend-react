import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { formatDate } from '../utils/dateUtils';

const FlightsList = () => {
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get('https://flight-status-mock.core.travelopia.cloud/flights');
        setFlights(response.data);
      } catch (err) {
        setError('Error fetching data.');
      }
    };

    fetchFlights();
    const intervalId = setInterval(fetchFlights, 5000); // Fetch every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Flights List</h1>
      <table>
        <thead>
          <tr>
            <th>Flight Number</th>
            <th>Airline</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Departure Time</th>
            <th>Status</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {flights.map(flight => (
            <tr key={flight.id}>
              <td>{flight.flightNumber}</td>
              <td>{flight.airline}</td>
              <td>{flight.origin}</td>
              <td>{flight.destination}</td>
              <td>{formatDate(flight.departureTime)}</td>
              <td>{flight.status}</td>
              <td><Link to={`/flights/${flight.id}`}>View</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightsList;
