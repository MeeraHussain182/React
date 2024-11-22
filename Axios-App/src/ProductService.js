import axios from "axios";

// Save product
export const saveProduct = async (jsonPayLoad) => {
  try {
    const response = await axios.post(`http://localhost:9225/api/v1/save`, jsonPayLoad);
    console.log("Product saved:", response.data);
    alert("Product saved successfully");
  } catch (error) {
    console.log("Error saving product:", error);
    alert("Failed to save product. Please try again.");
  }
};

// Get all products
export const getProducts = async () => {
  try {
    const response = await axios.get(`http://localhost:9225/api/v1/products`);
    return response.data;
  } catch (error) {
    console.log("Error fetching products:", error);
    return [];
  }
};

// Delete a product by ID
export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:9225/api/v1/deleteProduct/${id}`);
    console.log("Product deleted:", response.data);
  } catch (error) {
    console.error("Error deleting the product:", error);
    alert("Failed to delete product. Please try again.");
  }
};

// Edit a product by ID
export const editProduct = async (id, updatedData) => {
  try {
    const response = await axios.put(`http://localhost:9225/api/v1/editProduct/${id}`, updatedData);
    console.log("Product Edited:", response.data);
  } catch (error) {
    console.error("Error editing the product:", error);
    alert("Failed to edit the product. Please try again.");
  }
};



