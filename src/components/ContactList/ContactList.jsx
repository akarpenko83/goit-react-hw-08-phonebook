import Contact from '../Contact/Contact';
import {
  ContactListContainer,
  ContactItem,
  Title,
} from './ContactList.styled';

import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/filterSlice';
import { contactsSelectors } from 'redux/contacts/contactSlice';
import { useEffect } from 'react';
import { contactsOperations } from 'redux/contacts/contactOperations';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(
    contactsSelectors.selectContacts,
  );
  const filterValue = useSelector(selectFilterValue);

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .includes(filterValue.toLowerCase()),
    );
  };

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  const renderedContacts = filteredContacts();
  return (
    <>
      <Title>Contacts:</Title>
      <ContactListContainer>
        {renderedContacts.map(({ name, number, id }) => (
          <ContactItem key={id}>
            <Contact
              name={name}
              number={number}
              contactId={id}
            />
          </ContactItem>
        ))}
      </ContactListContainer>
    </>
  );
}
