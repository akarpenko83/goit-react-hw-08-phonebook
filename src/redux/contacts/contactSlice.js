import { contactsOperations } from './contactOperations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  isLoading: false,
  console: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsOperations.getContacts.pending](state) {
      state.isLoading = true;
    },
    [contactsOperations.getContacts.fulfilled](
      state,
      action,
    ) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [contactsOperations.getContacts.rejected](
      state,
      action,
    ) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [contactsOperations.addContact.fulfilled](
      state,
      action,
    ) {
      state.contacts.push(action.payload);
    },
    [contactsOperations.addContact.pending](state) {
      state.isLoading = true;
    },
    [contactsOperations.addContact.rejected](
      state,
      action,
    ) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [contactsOperations.removeContact.fulfilled](
      state,
      action,
    ) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id,
      );
      state.contacts.splice(index, 1);
    },
    [contactsOperations.removeContact.pending](state) {
      state.isLoading = true;
    },
    [contactsOperations.removeContact.rejected](
      state,
      action,
    ) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
const selectContacts = state => state.contacts.contacts;
const selectIsLoading = state => state.isLoading;

export const contactsSelectors = {
  selectContacts,
  selectIsLoading,
};
