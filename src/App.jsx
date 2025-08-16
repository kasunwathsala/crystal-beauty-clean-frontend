import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './pages/home/login.jsx'
import AdminHomePage from './pages/home/adminhomepage.jsx'
import AdminDashboard from './pages/admin/adminDashboard.jsx'
import AdminProductPage from './pages/admin/adminProductpage.jsx'
import AdminOrderPage from './pages/admin/adminorderpage.jsx'
import AdminCustomerPage from './pages/admin/admincustomerpage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddProductForm from './pages/admin/addproductform.jsx';
import { Toaster } from 'react-hot-toast';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Toaster position="top-right"/>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/adminhome" element={<AdminHomePage />} >
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="products" element={<AdminProductPage />} />
            <Route path="products/addproducts" element={<AddProductForm />} />
            <Route path="orders" element={<AdminOrderPage />} />
            <Route path="customers" element={<AdminCustomerPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
