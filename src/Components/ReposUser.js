import { useEffect, useState } from 'react';

import Star from '../assets/star.svg';
import Fork from '../assets/code-branch-solid.svg';
import Language from '../assets/language.svg';
import Share from '../assets/share.svg';

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

  return (
    <div class='grid grid-cols-3 gap-4 mt-20 ml-40'>
      {repositories.map((repo) => (
        <div class='bg-blackVeryDark w-96 flex flex-col'>
          <div class='flex-1 ml-4'>
            <p class='text-gray font-display font-bold mt-4 text-xl'>
              {repo.name}
            </p>
            <p class='text-gray'>
              {repo.description || 'No description completed'}
            </p>
          </div>
          <div class='h-20 flex items-end ml-4 mb-4'>
            <div class='flex mr-4'>
              <img src={Star} alt='star icon' class='w-4 mr-2' />
              <p class='text-gray'>{repo.stargazers_count || '0'}</p>
            </div>
            <div class='flex mr-4'>
              <img src={Fork} alt='fork icon' class='w-4 mr-2' />
              <p class='text-gray'>{repo.forks_count}</p>
            </div>
            <div class='flex mr-4'>
              <img src={Language} alt='language icon' class='mr-2' />
              <p class='text-gray'>{repo.language || 'x language'}</p>
            </div>
            <div class='flex mr-4'>
              <a href={repo.html_url} target='_blank' rel='noreferrer'>
                <img src={Share} alt='share icon' class='w-4' />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReposUser;
