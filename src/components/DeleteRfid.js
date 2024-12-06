import React, { useState } from "react";
import API from "../api";

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
    <form onSubmit={handleDelete}>
      <input
        type="text"
        placeholder="RFID"
        value={rfid_tag}
        onChange={(e) => setRfid(e.target.value)}
        required
      />
      <button type="submit">Eliminar</button>
    </form>
  );
};

export default DeleteRfid;
