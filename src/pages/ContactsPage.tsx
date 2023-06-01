import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/Store';
import { Link } from 'react-router-dom';
import ContactList from '../components/Contacts/ContactList';
import { remove } from '../Redux/ContactsReducer';

export default function ContactsPage() {
  const contacts = useSelector(
    (state: RootState) => state.contacts.listOfContacts
  );
  const dispatch = useDispatch();

  function deleteContact(id: number) {
    dispatch(remove({ id }));
  }

  return (
    <div>
      <div className="text-center my-6">
        <Link
          className="create-contacts-link p-2 rounded-md bg-blue-500 text-white"
          to="/contacts/create"
        >
          Create Contact
        </Link>
      </div>
      {contacts.length > 0 ? (
        <div className="contact-list-view grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {contacts.map((item) => (
            <ContactList
              key={item.id}
              id={item.id}
              firstName={item.firstName}
              lastName={item.lastName}
              status={item.status}
              handleDelete={deleteContact}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-lg">
            <h1 className="text-4xl font-bold text-center text-red-500 mb-4">
              No Contacts Found!
            </h1>
            <p className="text-lg text-center text-gray-600">
              Please add contact from Create Contact Button
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
