import React, { useEffect } from "react";

const ReadRfid = ({ inventory, fetchInventory }) => {
  // Automatically fetch inventory when the component is mounted
  useEffect(() => {
    fetchInventory();
  }, [fetchInventory]);

  return (
    <div>
      <h2>Inventario RFID</h2>
      <table border="1" style={{ width: "100%", textAlign: "left" }}>
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
              <tr key={item.rfid}>
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
