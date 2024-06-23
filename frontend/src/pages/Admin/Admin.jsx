// src/components/AdminPage.jsx
import React, { useState } from 'react';
import DishForm from './dish';
import DishList from './dishList';

const AdminPage = () => {
  const [dishes, setDishes] = useState([]);

  const addDish = (dish) => {
    setDishes([...dishes, dish]);
  };

  const removeDish = (id) => {
    setDishes(dishes.filter((dish) => dish.id !== id));
  };

  const editDish = (updatedDish) => {
    setDishes(dishes.map((dish) => (dish.id === updatedDish.id ? updatedDish : dish)));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Page</h1>
      <DishForm addDish={addDish} />
      <DishList dishes={dishes} removeDish={removeDish} editDish={editDish} />
    </div>
  );
};

export default AdminPage;
