import axios from "axios";
import { useState, useEffect } from "react";

export default function AdminProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Admin Product Page
      </h1>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3 text-left">Product ID</th>
              <th className="p-3 text-left">Product Name</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Last Price</th>
              <th className="p-3 text-left">Stock</th>
              <th className="p-3 text-left">Description</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="p-3">{product.productId}</td>
                  <td className="p-3">{product.productName}</td>
                  <td className="p-3">Rs. {product.price}</td>
                  <td className="p-3">Rs. {product.lastPrice}</td>
                  <td className="p-3">{product.stock}</td>
                  <td className="p-3">{product.description}</td>
                  <td className="p-3 space-x-2">
                    <button className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
                      Edit
                    </button>
                    <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="p-4 text-center text-gray-500 italic"
                >
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
