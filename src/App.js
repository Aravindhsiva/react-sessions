import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';
import DashboardScreen from './screens/router/DashboardScreen';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/router/HomeScreen';
import FourNotFourScreen from './screens/router/FourNotFourScreen';
import { CartScreen } from './screens/router/CartScreen';

import Product from './screens/router/Product';
import Order from './screens/router/Order';
import PropsExample from './screens/props/props';
import DetailedProductScreen from './screens/router/DetailedProductScreen';
import SearchProducts from './screens/router/SearchProducts';

const App = () => {
  return <Routes>
    <Route path='/' element={<HomeScreen />} ></Route>
    <Route path='dashboard' element={<DashboardScreen />} ></Route>
    <Route path="cart" element={<CartScreen />} >
      <Route index element={<Product />} />
      <Route path='product' element={<Product />} ></Route>
      <Route path='order' element={<Order />} ></Route>
    </Route>
    <Route path="payment" element={<PropsExample />} />
    <Route path="search" element={<SearchProducts />} />
    <Route path="payment/:productId" element={<DetailedProductScreen />} />
    <Route path="*" element={<FourNotFourScreen />} />
  </Routes>
}

/**
 * / -> home
 * /dashboard -> Dashboard
 * /cart -> CartScreens
 *
 */

export default App;
