import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../firebase";

const PrivateRoute = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div> User Loading...</div>;
  }

  return <>{user ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;
