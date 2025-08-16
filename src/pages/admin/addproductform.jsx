export default function AddProductForm() {
    return (
        <div className="max-w-lg mx-auto mt-10 p-8 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
            <form>
                <div className="mb-4">
                    <label className="block mb-1">Product Name</label>
                    <input className="w-full border px-3 py-2 rounded" type="text" placeholder="Product Name" />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Price</label>
                    <input className="w-full border px-3 py-2 rounded" type="number" placeholder="Price" />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Stock</label>
                    <input className="w-full border px-3 py-2 rounded" type="number" placeholder="Stock" />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Description</label>
                    <textarea className="w-full border px-3 py-2 rounded" placeholder="Description" />
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition" type="submit">Add Product</button>
            </form>
        </div>
    );
}