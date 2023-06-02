// Importing necessary modules and components
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/Store';
import { Link } from 'react-router-dom';
import ContactList from '../components/Contacts/ContactList';
import { remove } from '../Redux/ContactsReducer';

export default function ContactsPage() {
  const contacts = useSelector(
    (state: RootState) => state.contacts.listOfContacts
  ); // Using the useSelector hook to access the list of contacts from the Redux store

  const dispatch = useDispatch(); // dispatching actions

  function deleteContact(id: number) {
    dispatch(remove({ id })); // Deleting contact using remove action with id
  }

  return (
    <div>
      <div className="text-center my-6">
        {/* Link to create a new contact */}
        <Link
          className="create-contacts-link p-2 rounded-md bg-blue-500 text-white"
          to="/contacts/create"
        >
          Create Contact
        </Link>
      </div>
      {contacts.length > 0 ? (
        <div className="contact-list-view grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Iterating over the contacts list and rendering ContactList component */}
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
          {/* Displaying a message when no contacts are found */}
          <div className="bg-white p-8 rounded shadow-lg flex justify-between">
            <span className="text-5xl bg-red-500 rounded-full sm:w-16 sm:h-16 w-20 h-14 flex items-center justify-center text-white mr-4">
              <i className="fa-solid fa-xmark"></i>
            </span>
            <div>
              <div className="flex items-center mb-4">
                <h1 className="text-4xl font-bold text-center text-red-500">
                  No Contacts Found!
                </h1>
              </div>
              <p className="text-lg text-center text-gray-600">
                Please add contact from Create Contact Button
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
