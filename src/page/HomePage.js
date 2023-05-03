import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <h2>Phone Book</h2>

      <Link to="/register">register on the page,</Link>

      <Link to="/login">login page.</Link>
    </div>
  );
};
