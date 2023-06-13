import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const isLogged = useSelector((state) => state.user.loggedIn);

  if (isLogged) {
    return children;
  }
  return <Navigate to="/" replace state={{ from: location }} />;
};

export default ProtectedRoute;
