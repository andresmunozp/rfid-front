import React, { useState } from "react";
import API from "../api";
import "../App.css"; // Ensure you import the CSS file

const DeleteRfid = ({ fetchInventory }) => {
  const [rfid_tag, setRfid] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await API.delete(`/rfid/${rfid_tag}`);
      alert("Registro eliminado exitosamente");
      fetchInventory(); // Update inventory after deletion
    } catch (error) {
      console.error("Error al eliminar el registro:", error);
    }
  };

  return (
    <div className="container2">
      <h2>Eliminar Registro</h2>
      <form onSubmit={handleDelete}>
        <div style={{ marginBottom: "10px" }}>
          <label>RFID: </label>
          <input
            type="text"
            placeholder="Ingrese el RFID a eliminar"
            value={rfid_tag}
            onChange={(e) => setRfid(e.target.value)}
            required
            className="input-field2"
          />
        </div>
        <button type="submit" className="btn2">Eliminar</button>
      </form>
    </div>
  );
};

export default DeleteRfid;
