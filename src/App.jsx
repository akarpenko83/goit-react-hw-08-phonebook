import { AppBar } from 'components/SharedLayout/AppBar';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppBar />}></Route>
    </Routes>
  );
};
