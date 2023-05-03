import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChangeValue = e => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;

      case 'password':
        setPassword(e.target.value);
        break;

      default:
        break;
    }
  };
  return (
    <>
      <form>
        <label>
          Email
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChangeValue}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChangeValue}
          />
        </label>

        <button type="button">Sign Up</button>
      </form>
    </>
  );
};

export default Login;
