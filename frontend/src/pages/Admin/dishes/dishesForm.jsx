// src/components/DishForm.jsx
import React, { useState } from 'react';

const DishForm = ({ addDish }) => {
  const [dish, setDish] = useState({ id: '', name: '', price: '', imageUrl: '' });

  const handleChange = (e) => {
    setDish({ ...dish, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDish({ ...dish, id: Date.now().toString() });
    setDish({ id: '', name: '', price: '', imageUrl: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <label className="block text-white">Dish Name</label>
        <input
          type="text"
          name="name"
          value={dish.name}
          onChange={handleChange}
          className="w-1/4 px-3 py-2 border rounded bg-gray-300"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-white ">Price</label>
        <input
          type="text"
          name="price"
          value={dish.price}
          onChange={handleChange}
          className="w-1/4 px-3 py-2 border rounded bg-gray-300"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-white ">Image URL</label>
        <input
          type="text"
          name="imageUrl"
          value={dish.imageUrl}
          onChange={handleChange}
          className="w-1/4 px-3 py-2 border rounded bg-gray-300"
        //   required
        />
      </div>
      <button type="submit" className="bg-green-500 text-white px-3 py-2 rounded">Add Dish</button>
    </form>
  );
};

export default DishForm;
