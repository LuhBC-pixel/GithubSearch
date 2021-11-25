import Git from '../assets/code-branch-solid.svg';

function TotalRepositories({ userData }) {
  return (
    <div class='bg-blackVeryDark w-40 h-24 flex flex-col'>
      <p class='text-gray text-center mt-2 text-base'>Total Repositories</p>
      <div class='flex justify-center mt-2'>
        <img src={Git} alt='git icon branch' class='w-4 p-0 m-0' />
        <p class='text-gray text-2xl ml-2'>{userData.public_repos}</p>
      </div>
    </div>
  );
}

export default TotalRepositories;
