// src/components/DishForm.jsx
import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Dropzone from "../../../components/Dropzone";
const DishForm = ({ addDish }) => {
  const [dish, setDish] = useState({
    id: "",
    name: "",
    price: "",
    imageUrl: "",
  });
  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    setDish({ ...dish, [e.target.name]: e.target.value });
  };

  const handleDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
    setDish({ ...dish, imageUrl: URL.createObjectURL(acceptedFiles[0]) });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addDish({ ...dish, id: Date.now().toString() });
    setDish({ id: "", name: "", price: "", imageUrl: "" });
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
          className="w-full px-3 py-2 border rounded text-black "
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
          className="w-full px-3 py-2 border rounded text-black"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-white  ">Image URL</label>
        <Dropzone onDrop={handleDrop} />
        {files.length > 0 && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1">Selected file:</Typography>
            <Typography variant="body2">{files[0].name}</Typography>
          </Box>
        )}
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white px-3 py-2 rounded"
      >
        Add Dish
      </button>
    </form>
  );
};

export default DishForm;
