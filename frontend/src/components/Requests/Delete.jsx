import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../utils/axios';
import { useState } from 'react';

const Delete = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    await axios.delete(`/requests/${id}`);

    setMessage(
      'Request deleted successfully, you will be redirected back to the grid.'
    );

    setTimeout(() => {
      navigate('/requests');
    }, 1500);
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-xl font-bold'>
        Are you sure you want to delete the request selected?
      </h1>
      <div className='flex justify-center py-5'>
        <div>
          <button
            onClick={() => navigate('/requests')}
            className='text-sm bg-blue-500 hover:bg-blue-700 p-3 rounded-md font-bold text-white mr-5'
          >
            Back
          </button>
        </div>
        <div>
          <button
            onClick={handleDelete}
            className='text-sm bg-red-500 hover:bg-red-700 p-3 rounded-md font-bold text-white ml-5'
            disabled={loading}
          >
            <div className='flex items-center justify-center'>
              {loading && (
                <div>
                  <svg
                    aria-hidden='true'
                    className='inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300'
                    viewBox='0 0 100 101'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                      fill='currentColor'
                    />
                    <path
                      d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                      fill='currentFill'
                    />
                  </svg>
                </div>
              )}
              <div className='text-center'>Delete</div>
            </div>
          </button>
        </div>
      </div>
      {message && (
        <div className='flex text-center items-center w-full max-w-sm p-4 space-x-4 divide-gray-200 rounded-lg shadow bg-blue-300'>
          <div className='pl-4 pr-4 text-sm font-semibold'>{message}</div>
        </div>
      )}
    </div>
  );
};

export default Delete;
