import { HomePage } from 'Pages/HomePage';
import { LoginPage } from 'Pages/LoginPage';
import { RegisterPage } from 'Pages/RegisterPage';
import { AppBar } from 'components/SharedLayout/AppBar';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          component={<RegisterPage />}
        />
        <Route path="login" component={<LoginPage />} />
      </Route>
    </Routes>
  );
};
