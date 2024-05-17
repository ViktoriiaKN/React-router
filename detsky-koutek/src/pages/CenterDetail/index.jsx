import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const CenterDetail = () => {
  const { detailId } = useParams();
const [center, setCenter] = useState(null);

useEffect(() => {
  const fetchCenter = async () => {
    const response = await fetch(`http://localhost:4000/api/centers/${detailId}`);
    const data = await response.json();
    setCenter(data.result);
  }

  fetchCenter();
}, [detailId]);

if (!center) {
  return <div>Loading...</div>;
}

  return (
    <div>
      <h2>{center.name}</h2>
      <p>{center.address}</p>
      <p>Kapacita: {center.capacity}</p>
      <h3>Otevírací doba:</h3>
      <ul>
      <li>Pondělí: {center.open.mon || 'Zavřeno'}</li>
        <li>Úterý: {center.open.tue || 'Zavřeno'}</li>
        <li>Středa: {center.open.wed || 'Zavřeno'}</li>
        <li>Čtvrtek: {center.open.thu || 'Zavřeno'}</li>
        <li>Pátek: {center.open.fri || 'Zavřeno'}</li>
        <li>Sobota: {center.open.sat || 'Zavřeno'}</li>
        <li>Neděle: {center.open.sun || 'Zavřeno'}</li>
      </ul>
      <p>{center.info}</p>
    </div>
  );
};
