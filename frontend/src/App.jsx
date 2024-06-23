import Layout from './pages/Layout/Layout';
import User from './pages/User/User';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import NotFound from './components/NotFound';
import RestaurentMenu from './pages/User/RestaurentMenu';
import Login from './pages/login/login';
import Signup from './pages/login/signup';
import DishPage from './pages/Admin/dishes/dishes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user/:restaurentId" element={<RestaurentMenu />} />
        <Route path="/admin" element={<DishPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;
