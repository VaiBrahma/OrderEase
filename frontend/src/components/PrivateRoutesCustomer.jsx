import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutesCustomer = () => {
  const auth = useSelector((state)=>{return state.user}) || {isAdmin : null};
  console.log(auth.isAdmin);
return (
    <>
      {auth.isAdmin === false && <Outlet />}
      {auth.isAdmin === true && <Navigate to="/admin" />}
      {auth.isAdmin === null && <Navigate to="/" />}
    </>
  )
}

export default PrivateRoutesCustomer;