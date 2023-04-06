import axios from 'axios';
import React, { useState } from 'react';

function UsernameForm() {
  const [username, setUsername] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3001/username', { username });
      console.log('Username sent to server');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UsernameForm;
