import { Route, Routes } from 'react-router-dom';
// import Header from '../components/header';
// import LoginPage from './loginPage';
// import ProductOverview from './home/productOverview';
// import ProductPage from './home/product';
// import Cart from './home/cart';
// import ShippingPage from './home/shipping';
// import MyOrdersPage from './home/orders';

import Header from "/src/components/header";

export default function HomePage() {
  return (
    <div className="h-screen w-full">
      <Header />
      <div className='w-full h-[calc(100vh-100px)] '>
        <Routes path="/*">
          <Route path="/*" />
          {/* <Route path="/products" element={<ProductPage/>} />
          <Route path="/login" element={<LoginPage/>} />

          <Route path="/cart" element={<Cart/>}/>
          <Route path="/shipping" element={<ShippingPage/>}/>   
          <Route path='/orders' element={<MyOrdersPage/>}/>      
          <Route path="/productInfo/:id" element={<ProductOverview/>} /> */}
        </Routes>  
      </div>
        
    </div>
  ); 
}
