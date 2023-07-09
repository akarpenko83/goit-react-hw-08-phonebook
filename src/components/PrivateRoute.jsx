import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth/authSlice';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(
    authSelectors.selectIsLoggedIn,
  );
  const isRefreshing = useSelector(
    authSelectors.selectIsRefreshing,
  );
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? (
    <Navigate to={redirectTo} />
  ) : (
    Component
  );
}
