import { FormEvent, useState } from 'react';

type ContactFormProps = {
  fName?: string;
  lName?: string;
  stat?: boolean;
  handleClick: (
    e: FormEvent,
    fName: string,
    lName: string,
    stat: boolean
  ) => void;
};

export default function ContactForm({
  fName = '',
  lName = '',
  stat = false,
  handleClick,
}: ContactFormProps) {
  const [firstName, setFirstName] = useState<string>(fName);
  const [lastName, setLastName] = useState<string>(lName);
  const [status, setStatus] = useState<boolean>(stat);

  return (
    <form
      onSubmit={(e) => handleClick(e, firstName, lastName, status)}
      className="sm:w-96 mx-auto border-2 p-6 border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transform transition-all hover:-translate-y-2"
    >
      <div className="mb-6">
        <label
          htmlFor="firstName"
          className="block text-gray-700 font-bold mb-2"
        >
          First Name:
        </label>
        <input
          id="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-cyan-500"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="lastName"
          className="block text-gray-700 font-bold mb-2"
        >
          Last Name:
        </label>
        <input
          id="lastName"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-cyan-500"
        />
      </div>
      <div className="mb-6 flex flex-col sm:flex-row justify-between">
        <span className="block text-gray-700 font-bold mb-2 sm:mb-0">
          Status:
        </span>
        <div className="flex flex-col sm:flex-row">
          <div className="flex items-center mb-2 sm:mb-0 sm:mr-4">
            <input
              id="active"
              type="radio"
              value="true"
              checked={status}
              onChange={(e) => setStatus(e.target.value === 'true')}
              required
              className="mr-1"
            />
            <label htmlFor="active">Active</label>
          </div>
          <div className="flex items-center">
            <input
              id="inactive"
              type="radio"
              value="false"
              checked={!status}
              onChange={(e) => setStatus(e.target.value === 'true')}
              required
              className="mr-1"
            />
            <label htmlFor="inactive">Inactive</label>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="block mx-auto bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full text-lg font-semibold"
      >
        Submit Contact
      </button>
    </form>
  );
}
