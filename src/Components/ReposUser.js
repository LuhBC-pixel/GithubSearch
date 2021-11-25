import { useCallback, useState } from 'react';

function ReposUser(props) {
  const [repositories, setRepositories] = useState([]);
  const reposUser = props.repos.repos_url;

  const getRepos = async () => {
    const response = await fetch(`${reposUser}`);
    const data = await response.json();
    console.log(data);

    setRepositories(r => [
      {
        id: data.id,
        name: data.name,
        description: data.description,
        language: data.language,
        star: data.stargazers_count,
        forks: data.forks,
      },
    ]);
  };

  useCallback(getRepos, [ reposUser ]);

  return (
    <div class='bg-blackVeryDark w-96 h-20'>
      {repositories.map((repo) => (
        <div class='mt-6 mb-2' key={repo.id}>
          <p class='text-white text-center'>{repo.name}</p>
          <p class='text-white'>{repo.description}</p>
          <p class='text-white'>{repo.stars}</p>
          <p class='text-white'>{repo.forks}</p>
          <p class='text-white'>{repo.language}</p>
        </div>
      ))}
    </div>
  );
}

export default ReposUser;
