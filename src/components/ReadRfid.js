import React, { useEffect } from "react";
import "../App.css"; // Import the CSS file

const ReadRfid = ({ inventory, fetchInventory }) => {
  // Automatically fetch inventory when the component is mounted
  useEffect(() => {
    fetchInventory();
  }, [fetchInventory]);

  return (
    <div className="container">
      <h2>Inventario RFID</h2>
      <table className="table">
        <thead>
          <tr>
            <th>RFID</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Última Actualización</th>
          </tr>
        </thead>
        <tbody>
          {inventory.length > 0 ? (
            inventory.map((item) => (
              <tr key={item.rfid_tag}>
                <td>{item.rfid_tag}</td>
                <td>{item.product_name}</td>
                <td>{item.count}</td>
                <td>{item.last_seen}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No hay datos disponibles.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReadRfid;