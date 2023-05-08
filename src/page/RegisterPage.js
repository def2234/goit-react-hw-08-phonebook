import { Box, Button, TextField } from '@mui/material';
import { register } from 'Redux/auth/authOperations';
import { getError } from 'Redux/auth/authSelectors';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(getError);

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
          Please double-check or enter unique data —{' '}
          <strong>and try again!</strong>
        </Alert>
      )}
      <Box
        onSubmit={handleSubmitForm}
        component="form"
        sx={{
          marginTop: '20px',
        }}
        noValidate
        autoComplete="on"
      >
        <TextField
          sx={{ display: 'block', marginBottom: '10px' }}
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={name}
          onChange={handleChangeValue}
          type="text"
          name="name"
          required
        />

        <TextField
          sx={{ display: 'block', marginBottom: '10px' }}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleChangeValue}
          type="email"
          name="email"
          required
        />

        <TextField
          sx={{ display: 'block', marginBottom: '10px' }}
          id="outlined-basic"
          label="Password"
          variant="outlined"
          value={password}
          onChange={handleChangeValue}
          type="password"
          name="password"
          required
        />

        <Button
          size="small"
          sx={{ display: 'block' }}
          variant="outlined"
          type="submit"
          disabled={name && email && password ? false : true}
        >
          Registration
        </Button>
      </Box>
    </>
  );
};

export default Register;
