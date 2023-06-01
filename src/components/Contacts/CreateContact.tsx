import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../Redux/Store';
import { FormEvent } from 'react';
import { add } from '../../Redux/ContactsReducer';
import { useNavigate } from 'react-router-dom';
import ContactForm from './ContactForm';

export default function CreateContact() {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  function addContact(
    e: FormEvent,
    firstName: string,
    lastName: string,
    status: boolean
  ) {
    e.preventDefault();
    dispatch(add({ firstName, lastName, status }));
    navigate(`/contacts`);
  }

  return (
    <div className="create-contact-screen">
      <h2 className="font-bold text-2xl mb-9 text-center hover:text-blue-500 duration-300 cursor-default">
        Create Contact Screen
      </h2>
      <ContactForm handleClick={addContact} />
    </div>
  );
}
