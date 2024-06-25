import Layout from './pages/Layout/Layout';
import User from './pages/User/User';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import NotFound from './components/NotFound';
import RestaurentMenu from './pages/User/RestaurentMenu';
import DishPage from './pages/Admin/dishes/dishes';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/customer" element={<User />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/customer/:restaurentId" element={<RestaurentMenu />} />
        <Route path="/admin" element={<DishPage />} />
      </Route>
      <Route path="*" element={<NotFound/>} />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;
