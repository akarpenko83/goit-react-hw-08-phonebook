import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { contactsSelectors } from 'redux/contacts/contactSlice';

export const ContactsPage = () => {
  const contacts = useSelector(
    contactsSelectors.selectContacts,
  );
  return (
    <>
      <ContactForm />

      {contacts.length > 0 && <Filter />}
      <ContactList />
    </>
  );
};
