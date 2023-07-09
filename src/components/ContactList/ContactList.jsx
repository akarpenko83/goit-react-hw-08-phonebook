import Contact from '../Contact/Contact';

import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/filterSlice';
import { contactsSelectors } from 'redux/contacts/contactSlice';
import { useEffect } from 'react';
import { contactsOperations } from 'redux/contacts/contactOperations';
import { Loading } from 'notiflix';
import { Container, Grid, Typography } from '@mui/material';

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
    try {
      Loading.hourglass();
      dispatch(contactsOperations.getContacts());
    } catch (error) {
      console.log(error);
    } finally {
      Loading.remove();
    }
  }, [dispatch]);

  const renderedContacts = filteredContacts();
  return (
    <Container component="main" maxWidth="xl">
      <Typography
        component="h2"
        variant="h4"
        sx={{
          marginBottom: '20px',
          textAlign: 'center',
        }}
      >
        Contacts:
      </Typography>
      <Grid container spacing={2}>
        {renderedContacts.map(({ name, number, id }) => (
          <Grid item xs={6} key={id}>
            <Contact
              name={name}
              number={number}
              contactId={id}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
