import React, { useEffect, useState } from "react";
import API from "../api";

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
    <div>
      <h2>Estado del Parqueadero</h2>
      <p>Espacios totales: {parkingStatus.total_spaces}</p>
      <p>Espacios disponibles: {parkingStatus.available_spaces}</p>
    </div>
  );
};

export default ParkingDashboard;
