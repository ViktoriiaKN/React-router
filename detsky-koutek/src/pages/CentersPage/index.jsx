import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const CentersPage = () => {
  const [centers, setCenters] = useState([]);

  useEffect(() => {
    const fetchCenters = async () => {
      const response = await fetch('http://localhost:4000/api/centers');
      const data = await response.json(); 
      setCenters(data.result);
    };

    fetchCenters();
  }, []);

  return (
    <div className="container">
      <h1>Seznam poboček</h1>
      <ul>
        {Array.isArray(centers) && centers.map((center) => (
          <li key={center.id}>
            <Link to={`/pobocky/${center.id}`}>
              {center.name}, {center.address}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}




