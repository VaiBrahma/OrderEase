// src/components/DishList.jsx
import React, { useState } from "react";

const DishList = ({ dishes, removeDish, editDish }) => {
  const [isEditing, setIsEditing] = useState(null);
  const [currentDish, setCurrentDish] = useState({
    id: "",
    name: "",
    price: "",
    imageUrl: "",
  });

  const startEditing = (dish) => {
    setIsEditing(dish.id);
    setCurrentDish(dish);
  };

  const handleChange = (e) => {
    setCurrentDish({ ...currentDish, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    editDish(currentDish);
    setIsEditing(null);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Dish List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dishes.map((dish) => (
          <div key={dish.id} className="border rounded-lg shadow-lg p-4">
            {isEditing === dish.id ? (
              <form onSubmit={handleUpdate} className="mb-2">
                <input
                  type="text"
                  name="name"
                  value={currentDish.name}
                  onChange={handleChange}
                  className="w-full px-2 py-1 border rounded mb-2"
                  required
                />
                <input
                  type="text"
                  name="price"
                  value={currentDish.price}
                  onChange={handleChange}
                  className="w-full px-2 py-1 border rounded mb-2"
                  required
                />
                <input
                  type="text"
                  name="imageUrl"
                  value={currentDish.imageUrl}
                  onChange={handleChange}
                  className="w-full px-2 py-1 border rounded mb-2"
                  //   required
                />
                <button
                  type="submit"
                  className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(null)}
                  className="bg-gray-500 text-white px-2 py-1 rounded"
                >
                  Cancel
                </button>
              </form>
            ) : (
              <div>
                <img
                  src={dish.imageUrl}
                  alt={dish.name}
                  className="w-full h-32 object-cover rounded mb-2"
                />
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-lg">{dish.name}</h3>
                    <p className="text-gray-700">{dish.price}/-</p>
                  </div>
                  <div>
                    <button
                      onClick={() => startEditing(dish)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => removeDish(dish.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DishList;
