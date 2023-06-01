import { Link } from 'react-router-dom';

export default function ContactList(props: {
  id: number;
  firstName: string;
  lastName: string;
  status: boolean;
  handleDelete: (id: number) => void;
}) {
  return (
    <div className="flex flex-col space-y-4 items-center mb-8 transform transition-all hover:-translate-y-2">
      <div className="w-full flex-wrap flex justify-center items-center">
        <div className="w-60 p-2 bg-white rounded-xl duration-300 shadow-lg hover:shadow-2xl">
          <img
            className="h-40 object-cover rounded-xl"
            src={`${
              props.status === true
                ? 'https://shorturl.at/qGZ89'
                : 'https://shorturl.at/blJYZ'
            }`}
            alt="Status"
          />
          <div className="p-2">
            <h2 className="font-bold text-lg mb-2 ">
              {props.firstName} {props.lastName}
            </h2>

            <p className="text-sm text-gray-600">Status: </p>
          </div>

          <div className="m-2">
            <span
              className={`text-white px-3 py-1 rounded-md cursor-default ${
                props.status === true
                  ? 'bg-green-600 hover:bg-green-700'
                  : 'bg-red-600 hover:bg-red-700'
              }`}
            >
              {props.status === true ? 'Active' : 'Inactive'}
            </span>
          </div>
        </div>
      </div>
      <Link
        to={`/contacts/edit/${props.id}`}
        className="edit-button bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full text-lg font-semibold"
      >
        Edit
      </Link>
      <button
        className="delete-button bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full text-lg font-semibold"
        onClick={() => props.handleDelete(props.id)}
      >
        Delete
      </button>
    </div>
  );
}
