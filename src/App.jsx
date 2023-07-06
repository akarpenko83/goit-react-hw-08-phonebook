import { HomePage } from 'Pages/HomePage';
import { LoginPage } from 'Pages/LoginPage';
import { RegisterPage } from 'Pages/RegisterPage';
import { AppBar } from 'components/SharedLayout/AppBar';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={<RegisterPage />}
          />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route
          path="*"
          element={<div>PAGE NOT FOUND</div>}
        />
      </Routes>
    </>
  );
};
