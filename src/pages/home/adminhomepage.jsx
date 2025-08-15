import { Link, Outlet } from "react-router-dom";
export default function AdminHomePage() {
  return (
    <div className="bg-blue-200 w-full h-screen flex">
      <div className="w-[20%] h-screen bg-blue-500 flex flex-col items-center pt-8 space-y-4">
  <Link to="dashboard" className="text-white">📊 dashboard</Link>
  <Link to="products" className="text-white">📦 products</Link>
  <Link to="orders" className="text-white">📝 orders</Link>
  <Link to="customers" className="text-white">👥 customers</Link>
      </div>
      <div className="w-[80%] h-screen bg-white p-8">
        <Outlet />
      </div>
    </div>
  )
}


