import { getIsLoggedIn } from 'Redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children, restricted = false }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to="/contacts" /> : children;
};

export default PublicRoute;
