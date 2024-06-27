import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useNavigate } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import User from './pages/User/User';
import NotFound from './components/NotFound';
import RestaurentMenu from './pages/User/RestaurentMenu';
import DishPage from './pages/Admin/dishes/dishes';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import More from './pages/Admin/More/More';
import Dashboard from './pages/Admin/Dashboard/Dashboard';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="customer" element={<User />} />
          <Route path="signup" element={<Signup />} />
          <Route path="customer/:restaurentId" element={<RestaurentMenu />}/>
          <Route path="admin" element={<More/>} />
          <Route path="admin/v1/dashboard" element={<Dashboard/>} />
        </Route>
        <Route path="*" element={<NotFound />}/>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
