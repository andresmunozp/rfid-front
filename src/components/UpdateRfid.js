import React, { useState } from "react";
import API from "../api";

const UpdateRfid = ({ fetchInventory }) => {
  const [rfid_tag, setRfid] = useState("");
  const [productName, setProductName] = useState("");
  const [count, setCount] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();

    // Ensure fields are filled out
    if (!rfid_tag || !productName || !count) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    try {
      // Send the PUT request to the backend
      const response = await API.put(`/rfid/${rfid_tag}`, {
        product_name: productName,
        count: parseInt(count),
      });

      // Alert success and re-fetch inventory
      alert("Registro actualizado exitosamente: " + response.data.message);
      fetchInventory(); // Re-fetch inventory to update the table
    } catch (error) {
      console.error("Error al actualizar el registro:", error);
      alert("Error al actualizar el registro. Verifique que el RFID existe.");
    }
  };

  return (
    <form onSubmit={handleUpdate} style={{ marginTop: "20px" }}>
      <h2>Actualizar Registro</h2>
      <div>
        <label>RFID: </label>
        <input
          type="text"
          placeholder="Ingrese el RFID"
          value={rfid_tag}
          onChange={(e) => setRfid(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Nombre del Producto: </label>
        <input
          type="text"
          placeholder="Nuevo nombre del producto"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Cantidad: </label>
        <input
          type="number"
          placeholder="Nueva cantidad"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          required
        />
      </div>
      <button type="submit">Actualizar</button>
    </form>
  );
};

export default UpdateRfid;
