import React from "react";
import "../App.css"; // Import CSS

const ParkingDashboard = ({ parkingStatus }) => {
  return (
    <div className="container">
      <h2 className="subtitle">Estado del Parqueadero</h2>
      <div className="parking-status">
        <span>Espacios totales: {parkingStatus.total_spaces}</span>
        <span>Espacios disponibles: {parkingStatus.available_spaces}</span>
      </div>
    </div>
  );
};

export default ParkingDashboard;
