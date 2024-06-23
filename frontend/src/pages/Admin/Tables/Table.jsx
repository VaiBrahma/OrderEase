// src/components/TableForm.jsx
import React, { useState } from 'react';

const TableForm = ({ addTable }) => {
  const [table, setTable] = useState({ id: '', number: '', occupied: false });

  const handleChange = (e) => {
    setTable({ ...table, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setTable({ ...table, occupied: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTable({ ...table, id: Date.now().toString() });
    setTable({ id: '', number: '', occupied: false });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <label className="block text-gray-700">Table Number</label>
        <input
          type="text"
          name="number"
          value={table.number}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-2 flex items-center">
        <input
          type="checkbox"
          name="occupied"
          checked={table.occupied}
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        <label className="text-gray-700">Occupied</label>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-3 py-2 rounded">Add Table</button>
    </form>
  );
};

export default TableForm;
