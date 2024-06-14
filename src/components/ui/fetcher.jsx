import React, { useState } from 'react'
import axios from 'axios';
function Fetcher() {
    const[numberId, setNumberId] = useState('');
    const[number, setNumber] = useState(null);
    const[error , setError] = useState(null);

    const fetchNumber = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:5000/number/${numberId}`);
            setNumber(response.data.number);
            setError(null);
          } catch (err) {
            setError('Number ID is not qualified or not found');
            setNumber(null);
          }
    }
  return (
    <div>
      <h2>Fetch Number by ID</h2>
      <input
        type="text"
        value={numberId}
        onChange={(e) => setNumberId(e.target.value)}
        placeholder="Enter Number ID"
      />
      <button onClick={fetchNumber}>Fetch Number</button>
      {number !== null && <p>Number: {number}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );

}

export default Fetcher
