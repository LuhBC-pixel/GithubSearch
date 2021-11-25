import { useLocation } from 'react-router';
import Navbar from './Navbar';
import TotalRepositories from './TotalRepositories';
import ReposUser from './ReposUser';

import ShowDataUser from './ShowDataUser';

function ShowUser() {
  const location = useLocation();
  const { userData } = location.state;
  console.log(userData);

  return (
    <div className='w-screen h-screen bg-black'>
      <Navbar />
      <div class='w-screen h-2/4 flex justify-center items-center -ml-60'>
        <img
          src={userData.avatar_url}
          alt={userData.login}
          class='rounded-full w-52 h-52'
        />
        <div class='ml-10'>
          <h2 class='text-purple text-2xl font-bold font-display -mt-14'>
            {userData.name}
          </h2>
          <p class='text-gray font-display self-end justify-self-start'>
            @{userData.login}
          </p>
        </div>
        <div class='w-1/3 h-10 box-border absolute mt-20 ml-96 -mr-72'>
          <ShowDataUser userData={userData} />
        </div>
        <div class='absolute right-1/4'>
          <TotalRepositories userData={userData} />
        </div>
      </div>
      <ReposUser repos={userData} />
    </div>
  );
}

export default ShowUser;
