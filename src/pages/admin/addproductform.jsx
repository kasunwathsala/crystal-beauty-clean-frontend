
import uploadMediaToSupabase from "../../utils/mediaUpload";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function AddProductForm() {
    const navigate = useNavigate();
    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [alternativeNames, setAlternativeNames] = useState("");
    const [imageFiles, setImageFiles] = useState([]);
    const [price, setPrice] = useState("");
    const [lastPrice, setLastPrice] = useState("");
    const [stock, setStock] = useState("");
    const [description, setDescription] = useState("");

    //handle submit function for add product button
    async function handleSubmit(e) {
        e.preventDefault();
        const altNames = alternativeNames.split(",");
    // imageUrls variable is not used, file input is handled by imageFiles

        const promisesArray = []
        for (let i = 0; i < imageFiles.length; i++) {
            promisesArray[i] = uploadMediaToSupabase(imageFiles[i])
        }
        const imgUrls = await Promise.all(promisesArray);
        console.log("Image URLs:", imgUrls);

        const product = {
            productId: productId,
            productName: productName,
            alternativeNames: altNames,
            imageUrls: imgUrls,
            price: price,
            lastPrice: lastPrice,
            stock: stock,
            description: description
        };
        const token = localStorage.getItem("token");

        // Send a POST request to add the new product
        try {
            await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/products", product, {
                headers: {
                    Authorization: "Bearer " + token
                }
            });
            navigate("/adminhome/products");
            toast.success("Product added successfully!");
        } catch (error) {
            toast.error("Failed to add product.");
        }
    }

    return (
        <div className="max-w-lg mx-auto mt-10 p-8 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
            <form>
                <div className="mb-4">
                    <label className="block mb-1">Product ID</label>
                    <input
                        value={productId}
                        onChange={e => setProductId(e.target.value)}
                        className="w-full border px-3 py-2 rounded"
                        type="text"
                        placeholder="Product ID"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Product Name</label>
                    <input
                        value={productName}
                        onChange={e => setProductName(e.target.value)}
                        className="w-full border px-3 py-2 rounded"
                        type="text"
                        placeholder="Product Name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Alternative Names</label>
                    <input
                        value={alternativeNames}
                        onChange={e => setAlternativeNames(e.target.value)}
                        className="w-full border px-3 py-2 rounded"
                        type="text"
                        placeholder="Alternative Names (comma separated)"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Product Images</label>
                    <input
                        onChange={e => setImageFiles(e.target.files)}
                        className="w-full border px-3 py-2 rounded"
                        type="file"
                        multiple
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Price</label>
                    <input
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        className="w-full border px-3 py-2 rounded"
                        type="number"
                        placeholder="Price"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Last Price</label>
                    <input
                        value={lastPrice}
                        onChange={e => setLastPrice(e.target.value)}
                        className="w-full border px-3 py-2 rounded"
                        type="number"
                        placeholder="Last Price"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Stock</label>
                    <input
                        value={stock}
                        onChange={e => setStock(e.target.value)}
                        className="w-full border px-3 py-2 rounded"
                        type="number"
                        placeholder="Stock"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Description</label>
                    <textarea
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        className="w-full border px-3 py-2 rounded"
                        placeholder="Description"
                    />
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition" type="button" onClick={handleSubmit}>Add Product</button>
            </form>
        </div>
    );
    }