import React from 'react';
import { Link } from 'react-router-dom';

const EnrollPage = () => {
    return (
        <div className='error-page'>
            <h1 className='font-bold text-9xl text-fuchsia-600'>Congratulation</h1>
            <h1 className='font-bold text-9xl mt-10'>Enroll Done</h1>
            <h2 className='font-bold text-xl text-rose-700 mb-8'>Best of luck . Work Hard </h2>
            <button><Link to='/home'><p className=' p-4 w-72 mt-30 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>GO TO HOME PAGE</p></Link></button>
        </div>
    );
};

export default EnrollPage;