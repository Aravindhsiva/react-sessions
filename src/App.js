import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';
import DashboardScreen from './screens/router/DashboardScreen';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/router/HomeScreen';
import FourNotFourScreen from './screens/router/FourNotFourScreen';
// import { CartScreen } from './screens/router/CartScreen';

import Product from './screens/router/Product';
import Order from './screens/router/Order';
import PropsExample from './screens/props/props';
import DetailedProductScreen from './screens/router/DetailedProductScreen';
import SearchProducts from './screens/router/SearchProducts';
import LoginScreen from './screens/router/LoginScreen';
import { AuthProvider } from './screens/router/auth/auth';
import ProfileScreen from './screens/router/ProfileScreen';
import AuthRedirect from './screens/router/auth/AuthRedirect';

const CartScreen = React.lazy(() => import("./screens/router/CartScreen"));


const App = () => {
  return <AuthProvider>
    <Routes>
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
      <Route path="payment" element={<PropsExample />} />
      <Route path="search" element={<SearchProducts />} />
      <Route path="payment/:productId" element={<DetailedProductScreen />} />
      <Route path="*" element={<FourNotFourScreen />} />
      <Route path="login" element={<LoginScreen />} />
      <Route path="profile" element={<AuthRedirect>
        <ProfileScreen />
      </AuthRedirect>} />
    </Routes>
  </AuthProvider>
}

/**
 * / -> home
 * /dashboard -> Dashboard
 * /cart -> CartScreens
 *
 *
 *   56.09 kB  build/static/js/main.585debf7.js
    1.78 kB   build/static/js/787.28cb0dcd.chunk.js
    541 B     build/static/css/main.073c9b0a.css
 */

export default App;


/**
 * Login Screen -> login -> username -> put in context ->login/logout
 * Profile Screen -> HEllo {username} -> logout
 */