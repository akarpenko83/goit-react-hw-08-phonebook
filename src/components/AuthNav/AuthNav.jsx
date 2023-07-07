import { Link } from '../AppBar/AppBar.styled';
export const AuthNav = () => {
  return (
    <div>
      <Link to="/register">SignUp</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};
