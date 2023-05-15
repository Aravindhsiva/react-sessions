import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';
import DashboardScreen from './screens/router/DashboardScreen';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/router/HomeScreen';
import FourNotFourScreen from './screens/router/FourNotFourScreen';
// import CartScreen from './screens/router/CartScreen';

import Product from './screens/router/Product';
import Order from './screens/router/Order';

const CartScreen = React.lazy(() => import("./screens/router/CartScreen"));
const App = () => {
  return <Routes>
    <Route path='/' element={<HomeScreen />} ></Route>
    <Route path='dashboard' element={<DashboardScreen />} ></Route>
    <Route path="cart" element={
    <Suspense>
      <CartScreen />
    </Suspense>} >
      <Route index element={<Product />} />
      <Route path='product' element={<Product />} ></Route>
      <Route path='order' element={<Order />} ></Route>
    </Route>
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
