import { configureStore } from '@reduxjs/toolkit';
import ContactsReducer from './ContactsReducer';

export const Store = configureStore({
  reducer: {
    contacts: ContactsReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
