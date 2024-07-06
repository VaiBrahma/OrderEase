import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutesAdmin = () => {
  const auth = useSelector((state)=>{return state.user}) || {isAdmin : null};
  console.log(auth.isAdmin);
return (
    <>
      {auth.isAdmin === true && <Outlet />}
      {auth.isAdmin === false && <Navigate to="/customer" />}
      {auth.isAdmin === null && <Navigate to="/" />}
    </>
  )
}

export default PrivateRoutesAdmin;