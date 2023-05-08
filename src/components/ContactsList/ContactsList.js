import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { deleteContact, fetchContacts } from 'Redux/operationsApi';
import {
  getError,
  getFilter,
  getIsLoading,
  getItems,
} from 'Redux/contacts/selectors';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import CircularProgress from '@mui/material/CircularProgress';

export const ContactsList = () => {
  const items = useSelector(getItems);
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const normalizedName = filter.toLowerCase();
  const filterContact = items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedName)
  );

  return (
    <ul>
      {isLoading && <CircularProgress />}
      {error && <p>{error}</p>}
      {filterContact.map(contact => {
        return (
          <ListItem
            sx={{ display: 'flex', alignItems: 'center', width: '400px' }}
            key={contact.id}
          >
            <ListItemAvatar>
              <Avatar>
                <ContactPhoneIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={contact.name} secondary={contact.number} />
            <Button
              size="small"
              variant="outlined"
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </ListItem>
        );
      })}
    </ul>
  );
};

// {
/* <ListItem key={contact.id}>
//             <P>{contact.name}:</P>
//             <Span>{contact.number}</Span>
//             <Button
//               size="small"
//               variant="outlined"
//               type="button"
//               onClick={() => dispatch(deleteContact(contact.id))}
//               startIcon={<DeleteIcon />}
//             >
//               Delete
//             </Button>
//           </ListItem> */
// }
