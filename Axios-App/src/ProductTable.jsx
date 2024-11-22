import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getProducts } from './ProductService';


export const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [updatedData, setUpdatedData] = useState({ name: '', quantity: '', price: '', category: '', image: '' });

  // Fetch products on initial load
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response || []);
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting the product: ", error);
    }
  };

  const handleEdit = async () => {
    try {
      await editProduct(editingProduct.id, updatedData);
      setEditingProduct(null); // Close the edit form
      fetchProducts(); // Refresh products list
    } catch (error) {
      console.error("Error editing the product:", error);
    }
  };

  const startEdit = (product) => {
    setEditingProduct(product);
    setUpdatedData({
      name: product.name,
      quantity: product.quantity,
      price: product.price,
      category: product.category,
      image: product.image,
    });
  };

  return (
    <div className="container mt-5">
      <button onClick={fetchProducts} className="btn btn-primary mb-3">
        Fetch Products
      </button>

      {editingProduct && (
        <div className="card mb-4">
          <div className="card-body">
            <h5>Edit Product</h5>
            <form onSubmit={(e) => { e.preventDefault(); handleEdit(); }}>
              <input type="text" value={updatedData.name} onChange={(e) => setUpdatedData({ ...updatedData, name: e.target.value })} placeholder="Name" className="form-control form-control-sm mb-2" />
              <input type="number" value={updatedData.quantity} onChange={(e) => setUpdatedData({ ...updatedData, quantity: e.target.value })} placeholder="Quantity" className="form-control form-control-sm mb-2" />
              <input type="number" value={updatedData.price} onChange={(e) => setUpdatedData({ ...updatedData, price: e.target.value })} placeholder="Price" className="form-control form-control-sm mb-2" />
              <input type="text" value={updatedData.category} onChange={(e) => setUpdatedData({ ...updatedData, category: e.target.value })} placeholder="Category" className="form-control form-control-sm mb-2" />
              <input type="text" value={updatedData.image} onChange={(e) => setUpdatedData({ ...updatedData, image: e.target.value })} placeholder="Image URL" className="form-control form-control-sm mb-2" />
              <button type="submit" className="btn btn-success btn-sm">Save</button>
              <button type="button" onClick={() => setEditingProduct(null)} className="btn btn-secondary btn-sm ml-2">Cancel</button>
            </form>
          </div>
        </div>
      )}

      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Category</th>
            <th>Image</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>npm update

              <td>
              <img
                 src={`images/${product.image}`} // corrected template literal
                 alt={product.name}
                 width="100"
                  height="80"
                  className="img-thumbnail"
              />

              </td>
              <td className="text-center">
                <button onClick={() => startEdit(product)} className="btn btn-primary btn-sm mr-2">Edit</button>
                <button onClick={() => handleDelete(product.id)} className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
          {!products.length && (
            <tr>
              <td colSpan="7" className="text-center">No products available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;