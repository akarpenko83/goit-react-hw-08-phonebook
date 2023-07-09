import React from 'react';
import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { contactsSelectors } from 'redux/contacts/contactSlice.js';
import { Notify } from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations } from 'redux/contacts/contactOperations';
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
} from '@mui/material';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(
    contactsSelectors.selectContacts,
  );

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const formReset = () => {
    setName('');
    setNumber('');
  };

  const onSubmit = async contact => {
    if (contacts.find(arr => arr.name === contact.name)) {
      Notify.failure(
        `${contact.name} is already in the contact list`,
      );

      return;
    }

    try {
      Loading.hourglass();
      await dispatch(
        contactsOperations.addContact(contact),
      );

      Notify.success(
        `${contact.name} added to your contact list`,
      );
    } catch (error) {
      Notify.failure(
        `${contact.name} unable to add contact to the list`,
      );
    } finally {
      Loading.remove();
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const contact = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    };
    onSubmit(contact);
    formReset();
    form.reset();
  };

  const handleChange = evt => {
    const event = evt.currentTarget.name;
    switch (event) {
      case 'name':
        setName(evt.currentTarget.value.trim());
        break;
      case 'number':
        let trimmedInput = evt.currentTarget.value.trim();
        setNumber(trimmedInput.replace(/\D/g, ''));
        break;
      default:
        break;
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xl"
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Paper
        sx={{
          width: '50%',
          marginBottom: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgb(127, 212, 158)',
        }}
      >
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{
            marginTop: 8,
            padding: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                value={name}
                variant="filled"
                autoComplete="on"
                name="name"
                required
                fullWidth
                id="Name"
                label="Name"
                autoFocus
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                size="normal"
                variant="filled"
                type="tel"
                required
                fullWidth
                id="number"
                label="Phone number"
                name="number"
                autoComplete="number"
                value={number}
                onChange={handleChange}
                placeholder="123-4567-8901"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            endIcon={<SendIcon />}
          >
            Add contact
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
