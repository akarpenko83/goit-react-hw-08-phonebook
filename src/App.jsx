import { Login } from 'Pages/LoginPage';
import { Register } from 'Pages/RegisterPage';
import { AppBar } from 'components/SharedLayout/AppBar';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<Login />} />
        <Route path="register" component={<Register />} />
        <Route path="login" component={<Login />} />
      </Route>
    </Routes>
  );
};
