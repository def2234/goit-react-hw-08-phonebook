import { Box, Button, TextField } from '@mui/material';
import { logIn } from 'Redux/auth/authOperations';
import { getError } from 'Redux/auth/authSelectors';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector(getError);

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

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    resetForm();
  };

  return (
    <>
      {error && (
        <Alert
          severity="error"
          sx={{
            marginTop: '20px',
            width: '400px',
            position: 'absolute',
            right: '15px',
            top: '100px',
          }}
        >
          <AlertTitle>Error</AlertTitle>
          Wrong email or password, please check your email and password —{' '}
          <strong>and try again!</strong>
        </Alert>
      )}
      <Box
        component="form"
        sx={{
          marginTop: '20px',
        }}
        onSubmit={handleSubmitForm}
        noValidate
        autoComplete="on"
      >
        <TextField
          sx={{
            display: 'block',
            marginBottom: '10px',
          }}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="text"
          name="email"
          value={email}
          onChange={handleChangeValue}
        />

        <TextField
          sx={{ display: 'block', marginBottom: '10px' }}
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          value={password}
          onChange={handleChangeValue}
        />

        <Button
          sx={{ display: 'block' }}
          variant="outlined"
          size="small"
          type="submit"
          disabled={email && password ? false : true}
        >
          Sign Up
        </Button>
      </Box>
    </>
  );
};

export default Login;
