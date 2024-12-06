import React, { useState } from "react";
import API from "../api";

const CreateRfid = ({ fetchInventory }) => {
  const [rfid_tag, setRfid] = useState("");
  const [productName, setProductName] = useState("");
  const [count, setCount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/rfid", {
        rfid_tag,
        product_name: productName,
        count: parseInt(count),
      });
      alert("Registro creado exitosamente");
      fetchInventory(); // Update inventory after adding
    } catch (error) {
      console.error("Error al crear el registro:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="RFID"
        value={rfid_tag}
        onChange={(e) => setRfid(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Nombre del Producto"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Cantidad"
        value={count}
        onChange={(e) => setCount(e.target.value)}
        required
      />
      <button type="submit">Crear</button>
    </form>
  );
};

export default CreateRfid;
