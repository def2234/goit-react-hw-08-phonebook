import { Link, NavLink, Outlet } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div>
      <Link to="/">
        <h1>Phone Book</h1>
      </Link>

      <nav>
        <NavLink to="/register">Register</NavLink>

        <NavLink to="/login">Login</NavLink>

        <NavLink to="/contacts">Contacts</NavLink>

        <Outlet />
      </nav>
    </div>
  );
};
