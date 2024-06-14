import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Calci() {
  const [average, setAverage] = useState(null);
  const [error, setError] = useState(null);

  const fetchAverage = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/average');
      setAverage(response.data.average);
      setError(null);
    } catch (err) {
      setError('Failed to fetch average');
      setAverage(null);
    }
  };

  useEffect(() => {
    fetchAverage();
  }, []);

  return (
    <div>
      <h2>Average of Numbers</h2>
      {average !== null ? <p>Average: {average}</p> : <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Calci;
