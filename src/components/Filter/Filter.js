import { TextField } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'Redux/contacts/filterSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(addFilter(e.target.value));
  };
  return (
    <TextField
      id="standard-basic"
      label="Find contacts by name"
      variant="standard"
      type="text"
      value={filter}
      onChange={changeFilter}
    />
  );
};
