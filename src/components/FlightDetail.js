import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { formatDate } from '../utils/dateUtils';

const FlightDetail = () => {
  const { id } = useParams();
  const [flight, setFlight] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlight = async () => {
      try {
        const response = await axios.get(`https://flight-status-mock.core.travelopia.cloud/flights/${id}`);
        setFlight(response.data);
      } catch (err) {
        setError('Error fetching flight details.');
      }
    };

    fetchFlight();
  }, [id]);

  if (error) return <div>{error}</div>;
  if (!flight) return <div>Loading...</div>;

  return (
    <div>
      <h1>Flight Detail</h1>
      <p><b>Flight Number:</b> {flight.flightNumber}</p>
      <p><b>Airline:</b> {flight.airline}</p>
      <p><b>Origin:</b> {flight.origin}</p>
      <p><b>Destination:</b> {flight.destination}</p>
      <p><b>Departure Time:</b> {formatDate(flight.departureTime)}</p>
      <p><b>Status:</b> {flight.status}</p>
    </div>
  );
};

export default FlightDetail;
