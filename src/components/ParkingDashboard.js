import React, { useEffect, useState } from "react";
import API from "../api";
import "../App.css"; // Ensure you import the CSS file

const ParkingDashboard = () => {
  const [parkingStatus, setParkingStatus] = useState({
    total_spaces: 0,
    available_spaces: 0,
  });

  // Fetch parking status
  const fetchParkingStatus = async () => {
    try {
      const response = await API.get("/parking_status");
      setParkingStatus(response.data);
    } catch (error) {
      console.error("Error fetching parking status:", error);
    }
  };

  useEffect(() => {
    fetchParkingStatus();
  }, []);

  return (
    <div className="container"> {/* Align with the table */}
      <h2>Estado del Parqueadero</h2>
      <div className="parking-status">
        <span>Espacios totales: {parkingStatus.total_spaces}</span>
        <span>Espacios disponibles: {parkingStatus.available_spaces}</span>
      </div>
    </div>
  );
};

export default ParkingDashboard;
