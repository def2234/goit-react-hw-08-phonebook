import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'Redux/operationsApi';
import { getItems } from 'Redux/contacts/selectors';
import { Box, Button, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export function FormContacts() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dataContact = { name, number };

  const items = useSelector(getItems);

  const dispatch = useDispatch();

  const handleInputChange = ({ target }) => {
    if (target.name === 'name') {
      setName(target.value);
    } else {
      setNumber(target.value);
    }
  };

  const handleAddContact = e => {
    if (name === '') {
      return;
    }
    const toFind = name.toLowerCase();
    if (items.find(item => item.name.toLowerCase() === toFind)) {
      alert(`${name} is alrady in contacts`);
    } else {
      console.log(dataContact);
      dispatch(addContact(dataContact));
      resetInput();
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleAddContact();
  };

  const resetInput = () => {
    setName('');
    setNumber('');
  };

  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        marginTop: '20px',
      }}
      noValidate
      autoComplete="on"
    >
      <TextField
        sx={{ display: 'block', marginBottom: '10px' }}
        id="standard-basic"
        label="Name"
        variant="standard"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleInputChange}
        value={name}
      />

      <TextField
        sx={{ display: 'block', marginBottom: '10px' }}
        id="standard-basic"
        label="Number"
        variant="standard"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleInputChange}
        value={number}
      />

      <Button
        sx={{ display: 'inline-block' }}
        startIcon={<AddIcon />}
        size="small"
        variant="outlined"
        type="button"
        disabled={name && number ? false : true}
        name="addContact"
        onClick={handleAddContact}
      >
        Add Contact
      </Button>
    </Box>
  );
}

export default FormContacts;
