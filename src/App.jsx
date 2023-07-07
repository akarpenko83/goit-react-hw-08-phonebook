import { ContactsPage } from 'Pages/ContactsPage';
import { HomePage } from 'Pages/HomePage';
import { LoginPage } from 'Pages/LoginPage';
import { RegisterPage } from 'Pages/RegisterPage';
import PrivateRoute from 'components/PrivateRoute';
import { AppBar } from 'components/AppBar/AppBar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Route, Routes } from 'react-router-dom';
import { authOperations } from 'redux/auth/authOperations';
import { RestrictedRoute } from 'components/RestrictedRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<ContactsPage />}
              />
            }
          />

          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
        </Route>
        <Route
          path="*"
          element={<div>PAGE NOT FOUND</div>}
        />
      </Routes>
    </>
  );
};
