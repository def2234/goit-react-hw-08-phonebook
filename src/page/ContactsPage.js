import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import FormContacts from 'components/FormContacts/FormContacts';

const ContactsPage = () => {
  return (
    <>
      <FormContacts />
      <Filter />
      <ContactsList />
    </>
  );
};

export default ContactsPage;
