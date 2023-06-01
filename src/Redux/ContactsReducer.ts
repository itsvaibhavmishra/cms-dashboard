import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  status: boolean;
}

export interface ContactsState {
  listOfContacts: Array<Contact>;
}

const initialState: ContactsState = {
  listOfContacts: [],
};

export const ContactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    add: (
      state,
      action: PayloadAction<{
        firstName: string;
        lastName: string;
        status: boolean;
      }>
    ) => {
      const randomId: number = Math.floor(Math.random() * 10_000_000); // Cheap, hopefully effective unique id generator
      const contact: Contact = {
        id: randomId,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        status: action.payload.status,
      };
      state.listOfContacts.push(contact);
    },
    mutate: (
      state,
      action: PayloadAction<{
        id: number;
        firstName: string;
        lastName: string;
        status: boolean;
      }>
    ) => {
      state.listOfContacts.map((item) => {
        if (item.id === action.payload.id) {
          item.firstName = action.payload.firstName;
          item.lastName = action.payload.lastName;
          item.status = action.payload.status;
        }
        return item;
      });
    },
    remove: (state, action: PayloadAction<{ id: number }>) => {
      state.listOfContacts = state.listOfContacts.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

// Export actions and reducers
export const { add, mutate, remove } = ContactsSlice.actions;
export default ContactsSlice.reducer;
