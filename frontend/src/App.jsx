import NotFound from './components/NotFound';
import Home from './pages/Home/Home';
import UserHomePage from './pages/UserHomePage/UserHomePage';
import AdminHomePage from './pages/AdminHomePage/AdminHomePage';
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "user",
    element: <UserHomePage/>,
  },
  {
    path: "admin",
    element: <AdminHomePage/>,
  },
  {
    path: "",
    element: <NotFound/>,
  },
]);

const App = () => {
  return <RouterProvider router = {router}/>;
}

export default App;
