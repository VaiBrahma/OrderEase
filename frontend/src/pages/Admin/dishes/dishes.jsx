// src/components/AdminPage.jsx
import React, { useState } from 'react';
import DishForm from './dishesForm';
import DishList from './dishesList';
import TableForm from './tableForm';
import TableList from './tableList';

const DishPage = () => {
  const [dishes, setDishes] = useState([]);
  const [tables, setTables] = useState([]);

  const addDish = (dish) => {
    setDishes([...dishes, dish]);
  };

  const removeDish = (id) => {
    setDishes(dishes.filter((dish) => dish.id !== id));
  };

  const editDish = (updatedDish) => {
    setDishes(dishes.map((dish) => (dish.id === updatedDish.id ? updatedDish : dish)));
  };

  const addTable = (table) => {
    setTables([...tables, table]);
  };

  const removeTable = (id) => {
    setTables(tables.filter((table) => table.id !== id));
  };

  const editTable = (updatedTable) => {
    setTables(tables.map((table) => (table.id === updatedTable.id ? updatedTable : table)));
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center">

      <div className="text-xl font-bold mb-2 text-orange-400 ">Manage Dishes</div>
      <DishForm addDish={addDish} />
      <DishList dishes={dishes} removeDish={removeDish} editDish={editDish} />

      <div className="text-xl font-bold mb-2 text-orange-400">Manage Tables</div>
      <TableForm addTable={addTable} />
      <TableList tables={tables} removeTable={removeTable} editTable={editTable} />
    </div>
  );
};

export default DishPage;
