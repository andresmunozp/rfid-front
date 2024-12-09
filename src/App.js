import React, { useState, useEffect } from "react";
import API from "./api";
import ReadRfid from "./components/ReadRfid";
import UpdateRfid from "./components/UpdateRfid";
import DeleteRfid from "./components/DeleteRfid";
import ParkingDashboard from "./components/ParkingDashboard";
import "./App.css"; // Import the CSS file

const App = () => {
  const [inventory, setInventory] = useState([]); // Inventory data
  const [parkingStatus, setParkingStatus] = useState({ // Parking status data
    total_spaces: 0,
    available_spaces: 0,
  });

  // Function to fetch inventory data
  const fetchInventory = async () => {
    try {
      const response = await API.get("/inventory");
      setInventory(response.data);
    } catch (error) {
      console.error("Error fetching inventory:", error);
    }
  };

  // Function to fetch parking status
  const fetchParkingStatus = async () => {
    try {
      const response = await API.get("/parking_status");
      setParkingStatus(response.data);
    } catch (error) {
      console.error("Error fetching parking status:", error);
    }
  };

  // Fetch data initially and set up polling
  useEffect(() => {
    // Fetch data on mount
    fetchInventory();
    fetchParkingStatus();

    // Set up polling every 5 seconds
    const interval = setInterval(() => {
      fetchInventory();
      fetchParkingStatus();
    }, 500); // Adjust interval as needed

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 className="title">Sistema de Parqueadero</h1>
      <ParkingDashboard parkingStatus={parkingStatus} />
      <h1 className="title">CRUD de Inventario RFID</h1>
      <ReadRfid inventory={inventory} fetchInventory={fetchInventory} />
      <UpdateRfid fetchInventory={fetchInventory} />
      <DeleteRfid fetchInventory={fetchInventory} />
    </div>
  );
};

export default App;
