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

export const AppBar = () => {
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
        </nav>
        <AuthNav />
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
