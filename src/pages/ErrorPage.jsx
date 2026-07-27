import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';

const ErrorPage = () => {
    return (
        <div className=''>
            <div className='flex items-center gap-2 w-3/4 mx-auto my-4'>
                <FaArrowLeftLong size={24} />
<h2 className='text-2xl text-sky-600 font-semibold'> Back to home</h2>
            </div>
            
            <img className='w-3/4 mx-auto border-blue-300 border rounded-3xl my-10' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaV-vXWTPSvKPWoNZaDcdrqFlwHaLd1fqAPJWSlsSf4Q&s=10' alt="" />
        </div>
    );
};

export default ErrorPage;