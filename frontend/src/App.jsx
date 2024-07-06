import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import User from './pages/User/User';
import NotFound from './components/NotFound';
import RestaurentMenu from './pages/User/RestaurentMenu';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import OrderHistory from './components/orderHistory.jsx';
import More from './pages/Admin/More/More';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import PrivateRoutesCustomer from './components/PrivateRoutesCustomer.jsx';
import PrivateRoutesAdmin from './components/PrivateRoutesAdmin.jsx';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route element={<PrivateRoutesCustomer/>}>
              <Route path="customer" element={<User />} />
              <Route path="customer/:restaurentId" element={<RestaurentMenu />}/>
              <Route path="orderhistory" element={<OrderHistory/>} />
          </Route>
          <Route element={<PrivateRoutesAdmin/>}>
              <Route path="admin" element={<More/>} />
              <Route path="admin/v1/dashboard" element={<Dashboard/>} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />}/>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
