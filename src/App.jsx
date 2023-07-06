import { AppBar } from 'components/SharedLayout/AppBar';
import { ContactsPage } from 'pages/ContactsPage';
import { HomePage } from './pages/HomePage/HomePage';
import { LoginPage } from 'pages/LoginPage';
import { NotFound } from 'pages/NotFound';
import { RegisterPage } from 'pages/RegisterPage';
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
          <Route
            path="contacts"
            element={<ContactsPage />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
