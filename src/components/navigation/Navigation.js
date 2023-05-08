import { getIsLoggedIn } from 'Redux/auth/authSelectors';
import UserMenu from 'components/userMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Div, H1, LinkItem, LinkItems, Nav } from './Navigation-styled';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar color="inherit" position="static">
          <Div>
            <LinkItem to="/">
              <H1>Phone Book</H1>
            </LinkItem>

            <Nav>
              {!isLoggedIn && (
                <LinkItems to="/register">
                  <Button size="small" color="inherit" variant="outlined">
                    Registration
                  </Button>
                </LinkItems>
              )}

              {!isLoggedIn && (
                <LinkItems to="/login">
                  <Button size="small" color="inherit" variant="outlined">
                    Login
                  </Button>
                </LinkItems>
              )}

              <LinkItems to="/contacts">
                <Button size="small" color="inherit" variant="outlined">
                  Contacts
                </Button>
              </LinkItems>

              {isLoggedIn && <UserMenu />}
            </Nav>
          </Div>
        </AppBar>
      </Box>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Navigation;
