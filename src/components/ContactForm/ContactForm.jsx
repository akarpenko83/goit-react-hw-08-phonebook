import React from 'react';
import { useState } from 'react';

import { contactsSelectors } from 'redux/contacts/contactSlice.js';
import { Notify } from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations } from 'redux/contacts/contactOperations';
import {
  Button,
  Form,
  FormGroup,
} from './contactForm.styled';

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
        setNumber(evt.currentTarget.value.trim());
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          Name
          <input
            // value={null}
            value={name}
            placeholder="John Doe"
            // onChange={null}
            onChange={handleChange}
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormGroup>
        <FormGroup>
          Number
          <input
            // value={null}
            value={number}
            type="tel"
            placeholder="050-000-00-00"
            // onChange={null}
            onChange={handleChange}
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormGroup>
        <Button type="submit">Add contact</Button>
      </Form>
    </>
  );
}
