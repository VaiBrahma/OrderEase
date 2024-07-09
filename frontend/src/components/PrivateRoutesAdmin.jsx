import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutesAdmin = () => {
  const auth = useSelector((state) => {
    return state.user;
  }) || { isAdmin: null };
  const token =
    useSelector((state) => {
      return state.token;
    }) || null;
  // console.log(auth, token);
  return (
    <>
      {(token !== null) & (auth.isAdmin === true) && <Outlet />}
      {(token !== null) & (auth.isAdmin === false) && (
        <Navigate to="/customer" />
      )}
      {(token === null) & (auth.isAdmin === null) && <Navigate to="/" />}
    </>
  );
};

export default PrivateRoutesAdmin;
