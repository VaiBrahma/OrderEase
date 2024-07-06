import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutesDefault = () => {
  const auth = useSelector((state)=>{return state.user}) || {isAdmin : null, token: null};
  const token = useSelector((state)=>{return state.token}) || null;
  // console.log(auth,token);
return (
    <>
      {token === null & auth.isAdmin === null && <Outlet/>}
      {token !== null & auth.isAdmin === true && <Navigate to="/admin" />}
      {token !== null & auth.isAdmin === false && <Navigate to="/customer" />}
    </>
  )
}

export default PrivateRoutesDefault;