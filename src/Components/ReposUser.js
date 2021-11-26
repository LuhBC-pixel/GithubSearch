import { useEffect, useState } from 'react';

import Star from '../assets/star.svg';
import Fork from '../assets/code-branch-solid.svg';
import language from '../assets/language.svg';

function ReposUser(props) {
  const [repositories, setRepositories] = useState([]);
  const reposUser = props.repos.repos_url;

  useEffect(() => {
    const getRepos = async () => {
      const response = await fetch(`${reposUser}`);
      const data = await response.json();

      setRepositories(data);
    };

    getRepos();
  }, [setRepositories, reposUser]);

  console.log(repositories);

  return (
    <div class='grid grid-cols-3 gap-4 mt-20'>
      {repositories.map((repo) => (
        <div class='bg-blackVeryDark w-96 flex'>
          <div class='mt-6 mb-2' key={repo.id}>
            <p class='text-gray text-center'>{repo.name}</p>
            <p class='text-gray'>{repo.description || 'No description completed'}</p>
            <div class='h-20 flex content-end'>
              <div class='flex'>
                <img src={Star} alt='star icon' class='w-4' />
                <p class='text-gray'>{repo.stars || '0'}</p>
              </div>
              <div class='flex'>
                <img src={Fork} alt='fork icon' class='w-4' />
                <p class='text-gray'>{repo.forks}</p>
              </div>
              <div class='flex'>
                <img src={language} alt='language icon' />
                <p class='text-gray'>{repo.language}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReposUser;
