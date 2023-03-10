import React from 'react';
import {Link} from 'react-router-dom';
import Search from './Search';
const Navbar = ({darkTheme, setDarkTheme}) => {
  return (
    <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200'>
      <div className='flex justify-between items-centre space-x-5 w-screen'>
      <Link to='/'>
        <p className='text-2xl bg-blue-400 font-bold text-white py-1 px-2 rounded-lg dark:bg-gray-50 dark:text-gray-900'>
          Guugle 🔍
        </p>
      </Link>
      <button type="button" onClick={()=>setDarkTheme(!darkTheme)} className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full py-1 px-2 hover:shadow-lg"  >
        {darkTheme? 'Light ☀' : 'Dark 🌙'}
      </button>
      </div>
      <Search/>
    </div>
  );
}

export default Navbar;