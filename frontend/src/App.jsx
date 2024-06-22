import Home from './pages/Home/Home';
import User from './pages/User/User';
import Admin from './pages/Admin/Admin';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import NotFound from './components/NotFound';
import RestaurentMenu from './pages/User/RestaurentMenu';
import MenuItem from './components/MenuItem/MenuItem';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route  path="/" element={<Home />}>
        <Route path="/user" element={<MenuItem />} />
        <Route path="/user/:restaurentId" element={<RestaurentMenu />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);

const App = () => {
  return <RouterProvider router = {router}/>;
}

export default App;
