import { register } from 'Redux/auth/authOperations';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeValue = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);

        break;
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

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const dispatch = useDispatch();

  const handleSubmitForm = e => {
    e.preventDefault();

    dispatch(register({ name, email, password }));
    resetForm();
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <label>
          Name
          <input
            value={name}
            onChange={handleChangeValue}
            type="text"
            name="name"
            required
          />
        </label>

        <label>
          Email
          <input
            value={email}
            onChange={handleChangeValue}
            type="email"
            name="email"
            required
          />
        </label>
        <label>
          Password
          <input
            value={password}
            onChange={handleChangeValue}
            type="password"
            name="password"
            required
          />
        </label>
        <button type="submit">Registration</button>
      </form>
    </>
  );
};

export default Register;
