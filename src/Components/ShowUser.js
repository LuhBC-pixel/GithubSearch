import { useLocation } from 'react-router';
import Navbar from './Navbar';
import TotalRepositories from './TotalRepositories';
import ReposUser from './ReposUser';

import ShowDataUser from './ShowDataUser';

function ShowUser() {
  const location = useLocation();
  const { userData } = location.state;

  return (
    <div className='w-full h-full bg-black'>
      <Navbar />
      <div class='h-full flex items-start mt-10'>
        <div class='w-screen flex justify-center'>
          <img
            src={userData.avatar_url}
            alt={userData.login}
            class='rounded-full w-52 h-52'
          />
          <div class='mt-6 ml-10'>
            <h2 class='text-purple text-2xl font-bold font-display'>
              {userData.name}
            </h2>
            <p class='text-gray font-display'>@{userData.login}</p>
            <div class='mt-6'>
              <ShowDataUser userData={userData} />
            </div>
          </div>
          <div class='mt-10 -ml-32'>
            <TotalRepositories userData={userData} />
          </div>
        </div>
      </div>
      <ReposUser repos={userData} />
    </div>
  );
}

export default ShowUser;
