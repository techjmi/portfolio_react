import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { RiCloseLine } from 'react-icons/ri'; 

const CheckOut = ({ handleClosed }) => {
  return (
    <div className="bg-slate-300 rounded-md py-2 px-4 shadow-md">
      <div className="flex justify-end">
        <RiCloseLine onClick={handleClosed} className='cursor-pointer size-6 mb-4' />
      </div>
      <div className="text flex justify-between items-start gap-3">
        <p className='inline-block'>Take a Look at My Blog </p>
        <a href='https://blog-mern-cfpm.onrender.com/' target="_blank" rel="noopener noreferrer" className="ml-1 mt-1 text-blue-500">
          <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
}

export default CheckOut;
