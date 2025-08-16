import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function AdminProductPage() {
  const [products, setProducts] = useState([]);
  const [productsLoaded, setProductsLoaded] = useState(false);

  useEffect(() => {
    if (!productsLoaded) {
      axios.get("http://localhost:5000/api/products").then((response) => {
        console.log(response.data);
        setProducts(response.data);
        setProductsLoaded(true);
      });
    }
  }, [productsLoaded]);

  return (
    <div className="min-h-screen bg-gray-50 p-8 relative">
      <Link
        to="addproducts"
        title="Add Product"
        className="absolute top-4 right-4 flex items-center justify-center bg-blue-600 text-white rounded-full w-12 h-12 text-2xl shadow hover:bg-blue-700 transition"
      >
        +
      </Link>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Admin Product Page
      </h1>
      {productsLoaded ? (
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
                      <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                        onClick={() => {
                          // alert(product.productId)
                          const token = localStorage.getItem("token");
                          axios.delete(`http://localhost:5000/api/products/${product.productId}`, {
                            headers: { Authorization: `Bearer ${token}` }
                          }).then((response) => {
                            // alert("Product deleted successfully");
                            console.log(response.data)
                            toast.success("Product deleted successfully");
                            setProductsLoaded(false);

                          }).catch((error) => {
                            console.error("Error deleting product:", error);
                          });
                        }}>
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
      ) : (
        <div className="flex items-center justify-center h-64">
          <div className="w-[60px] h-[60px] border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}
