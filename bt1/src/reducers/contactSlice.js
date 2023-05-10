import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      {
        id: 1,
        name: 'Nghiệp',
        phone: '0378936624',
        isFavorite: false,
      },
      {
        id: 2,
        name: 'Nghiệp',
        phone: '0378936624',
        isFavorite: true,
      },
      {
        id: 3,
        name: 'Nghiệp',
        phone: '0378936624',
        isFavorite: false,
      },
    ],
  },
  reducers: {
    addContact: (state, action) => {
      const newContact = action.payload;
      state.contacts.push(newContact);
    },
    deleteContact: (state, action) => {
      const contactId = action.payload;
      state.contacts = state.contacts.filter((contact) => contact.id !== contactId);
    },
    toggleFavorite: (state, action) => {
      const contactId = action.payload;
      const contact = state.contacts.find((contact) => contact.id === contactId);
      contact.isFavorite = !contact.isFavorite;
    },
  },
});

export const { addContact, deleteContact, toggleFavorite } = contactSlice.actions;

export const selectContacts = (state) => state.contacts.contacts;

export default contactSlice.reducer;