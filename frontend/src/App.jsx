import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import User from './pages/User/User';
import NotFound from './components/NotFound';
import RestaurentMenu from './pages/User/RestaurentMenu';
import Home from './pages/Home/Home';
import Signup from './pages/Register/Signup/Signup.jsx';
import OrderHistory from './components/orderHistory.jsx';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import PrivateRoutesCustomer from './components/PrivateRoutesCustomer.jsx';
import PrivateRoutesAdmin from './components/PrivateRoutesAdmin.jsx';
import Menu from './pages/Admin/Menu/Menu.jsx';
import Tables from './pages/Admin/Tables/Tables.jsx';
import Reviews from './pages/Admin/Reviews/Reviews.jsx';
import PaymentHistory from './pages/Admin/PaymentHistory/PaymentHistory.jsx';
import Login from './pages/Register/Login/Login.jsx';
import AdminLayout from './pages/Admin/AdminLayout/AdminLayout.jsx';
import PrivateRoutesDefault from './components/PrivateRoutesDefault.jsx';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route element={<PrivateRoutesDefault/>}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
          </Route>
          <Route element={<PrivateRoutesCustomer/>}>
              <Route path="customer" element={<User />} />
              <Route path="customer/:restaurentId" element={<RestaurentMenu />}/>
              <Route path="orderhistory" element={<OrderHistory/>} />
          </Route>
          <Route element={<PrivateRoutesAdmin/>}>
              <Route path="admin" element={<AdminLayout/>}>
                <Route index element={<Dashboard/>} />
                <Route path="v1/dashboard" element={<Dashboard/>} />
                <Route path="v1/menu" element={<Menu/>} />
                <Route path="v1/tables" element={<Tables/>} />
                <Route path="v1/reviews" element={<Reviews/>} />
                <Route path="v1/payment-history" element={<PaymentHistory/>} />
              </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />}/>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
