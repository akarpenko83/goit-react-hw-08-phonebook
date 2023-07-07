import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  Image,
  Link,
  Logo,
} from './AppBar.styled';
import { AuthNav } from './AuthNav';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/authSlice';
import { UserMenu } from './UserMenu';

export const AppBar = () => {
  const isLoggedIn = useSelector(
    authSelectors.selectIsLoggedIn,
  );
  return (
    <Container>
      <Header>
        <Logo>
          <Image
            width={50}
            src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Contacts-icon.png"
            alt="logotype"
          />
        </Logo>
        <nav>
          <Link to="/">HomePage</Link>
          <Link to="/contacts">ContactsPage</Link>
        </nav>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
