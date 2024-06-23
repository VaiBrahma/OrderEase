// src/components/TableList.jsx
import React, { useState } from 'react';

const TableList = ({ tables, removeTable, editTable }) => {
  const [isEditing, setIsEditing] = useState(null);
  const [currentTable, setCurrentTable] = useState({ id: '', number: '', occupied: false });

  const startEditing = (table) => {
    setIsEditing(table.id);
    setCurrentTable(table);
  };

  const handleChange = (e) => {
    setCurrentTable({ ...currentTable, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setCurrentTable({ ...currentTable, occupied: e.target.checked });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    editTable(currentTable);
    setIsEditing(null);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Table List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tables.map((table) => (
          <div key={table.id} className="border rounded-lg shadow-lg p-4">
            {isEditing === table.id ? (
              <form onSubmit={handleUpdate} className="mb-2">
                <input
                  type="text"
                  name="number"
                  value={currentTable.number}
                  onChange={handleChange}
                  className="w-full px-2 py-1 border rounded mb-2"
                  required
                />
                <div className="mb-2 flex items-center">
                  <input
                    type="checkbox"
                    name="occupied"
                    checked={currentTable.occupied}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  <label className="text-gray-700">Occupied</label>
                </div>
                <button type="submit" className="bg-green-500 text-white px-2 py-1 rounded mr-2">Save</button>
                <button type="button" onClick={() => setIsEditing(null)} className="bg-gray-500 text-white px-2 py-1 rounded">Cancel</button>
              </form>
            ) : (
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg">Table {table.number}</h3>
                  <p className="text-gray-700">{table.occupied ? 'Occupied' : 'Available'}</p>
                </div>
                <div>
                  <button onClick={() => startEditing(table)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                  <button onClick={() => removeTable(table.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableList;
