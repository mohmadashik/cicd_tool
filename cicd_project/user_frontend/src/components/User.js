// user_frontend/src/components/User.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const User = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/users/');
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from Django API</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default User;
