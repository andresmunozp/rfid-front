import React, { useState, useEffect } from "react";
import API from "./api";
import ReadRfid from "./components/ReadRfid";
import CreateRfid from "./components/CreateRfid";
import UpdateRfid from "./components/UpdateRfid";
import DeleteRfid from "./components/DeleteRfid";

const App = () => {
  const [inventory, setInventory] = useState([]);

  // Function to fetch data from the backend
  const fetchInventory = async () => {
    try {
      const response = await API.get("/inventory");
      setInventory(response.data);
    } catch (error) {
      console.error("Error fetching inventory:", error);
    }
  };

  // Pass the fetchInventory function to child components
  return (
    <div>
      <h1>CRUD de Inventario RFID</h1>
      <CreateRfid fetchInventory={fetchInventory} />
      <ReadRfid inventory={inventory} fetchInventory={fetchInventory} />
      <UpdateRfid fetchInventory={fetchInventory} />
      <DeleteRfid fetchInventory={fetchInventory} />
    </div>
  );
};

export default App;
