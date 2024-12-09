import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import API from "./api";
import ReadRfid from "./components/ReadRfid";
import UpdateRfid from "./components/UpdateRfid";
import DeleteRfid from "./components/DeleteRfid";
import ParkingDashboard from "./components/ParkingDashboard";
import "./App.css";

const socket = io("https://rfid-i6fn.onrender.com");

const App = () => {
    const [inventory, setInventory] = useState([]);
    const [parkingStatus, setParkingStatus] = useState({
        total_spaces: 0,
        available_spaces: 0,
    });

    // Fetch initial data
    const fetchInventory = async () => {
        try {
            const response = await API.get("/inventory");
            setInventory(response.data);
        } catch (error) {
            console.error("Error fetching inventory:", error);
        }
    };

    const fetchParkingStatus = async () => {
        try {
            const response = await API.get("/parking_status");
            setParkingStatus(response.data);
        } catch (error) {
            console.error("Error fetching parking status:", error);
        }
    };

    useEffect(() => {
        fetchInventory();
        fetchParkingStatus();

        // Listen for WebSocket updates
        socket.on("parking_update", (data) => {
            console.log("Parking status updated:", data);
            setParkingStatus((prev) => ({ ...prev, available_spaces: data.available_spaces }));
        });

        socket.on("inventory_update", (data) => {
            console.log("Inventory updated:", data);
            fetchInventory(); // Fetch inventory on update
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <div>
            <h1 className="title">Sistema de Parqueadero</h1>
            <ParkingDashboard parkingStatus={parkingStatus} />
            <h1 className="title">CRUD de Inventario RFID</h1>
            <ReadRfid inventory={inventory} />
            <UpdateRfid fetchInventory={fetchInventory} />
            <DeleteRfid fetchInventory={fetchInventory} />
        </div>
    );
};

export default App;
