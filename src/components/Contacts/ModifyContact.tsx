import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Redux/Store';
import { FormEvent } from 'react';
import { Contact, mutate } from '../../Redux/ContactsReducer';
import ContactForm from './ContactForm';
import { useNavigate, useParams } from 'react-router-dom';
import Error from '../../pages/ErrorPage';

export default function CreateContact() {
  const contactsList = useSelector(
    (state: RootState) => state.contacts.listOfContacts
  );
  const dispatch: AppDispatch = useDispatch();

  const navigate = useNavigate();
  const { id } = useParams();

  const currentContact: Contact | undefined = contactsList.find((item) => {
    if (item.id === Number(id)) {
      return item;
    }
    return undefined;
  });

  if (!currentContact) {
    return <Error />;
  }

  function editContact(
    e: FormEvent,
    firstName: string,
    lastName: string,
    status: boolean
  ) {
    e.preventDefault();
    dispatch(mutate({ id: Number(id), firstName, lastName, status }));
    navigate(`/contacts`);
  }

  return (
    <div className="create-contact-screen">
      <h2 className="font-bold text-2xl mb-9 text-center hover:text-blue-500 duration-300 cursor-default">
        Edit Contact Screen
      </h2>
      {/* Only mutation behavior need be passed to the child. Defaults for initial state. */}
      <ContactForm
        fName={currentContact.firstName}
        lName={currentContact.lastName}
        stat={currentContact.status}
        handleClick={editContact}
      />
    </div>
  );
}
