import { useState } from 'react';
import { useNavigate } from 'react-router';

import Logo from '../assets/logo-vertical.svg';
import Search from '../assets/search-solid.svg';

function Home() {
  const [value, setValue] = useState('');

  let navigate = useNavigate();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const searchHandle = async (event) => {
    event.preventDefault();
    const response = await fetch(`https://api.github.com/users/${value}`);
    const data = await response.json();
    navigate('/user', {
      state: {
        userData: data,
      },
    });
  };

  return (
    <div class='w-screen h-screen bg-black'>
      <div class='w-screen h-screen flex flex-col justify-center content-center items-center'>
        <img src={Logo} alt='logo github' class='m-6 box-border' />
        <label class=''>
          <form onSubmit={(event) => searchHandle(event)}>
          <input
            type='text'
            class='border-b-4 border-t-0 border-r-0 border-l-0 border-purple focus:ring-0 bg-black w-60 text-white font-display'
            placeholder='Enter user name'
            value={value.trim()}
            onChange={handleChange}
          />
            <button
              type='submit'
              class='w-full mt-12 flex justify-center py-2 px-4 border border-transparent font-medium rounded-sm text-white bg-purple text-lg'
            >
              Search{' '}
              <img src={Search} alt='search icon' class='w-5 h-5 ml-2 mt-2' />
            </button>
          </form>
        </label>
      </div>
    </div>
  );
}

export default Home;
