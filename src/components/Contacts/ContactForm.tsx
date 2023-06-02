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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleClick(e, firstName, lastName, status);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-96 p-6 border-2 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-gray-200"
    >
      <div className="mb-6">
        <label
          htmlFor="firstName"
          className="mb-2 block font-bold text-gray-700"
        >
          First Name:
        </label>
        <input
          id="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-md appearance-none focus:outline-none focus:border-cyan-500"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="lastName"
          className="mb-2 block font-bold text-gray-700"
        >
          Last Name:
        </label>
        <input
          id="lastName"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-md appearance-none focus:outline-none focus:border-cyan-500"
        />
      </div>
      <div className="mb-6 flex flex-col sm:flex-row justify-between">
        <span className="mb-2 block font-bold text-gray-700 sm:mb-0">
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
        className="block mx-auto py-3 px-6 text-lg font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600"
      >
        Submit Contact
      </button>
    </form>
  );
}
