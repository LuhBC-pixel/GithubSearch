import { useEffect, useState } from 'react';

import Pin from '../assets/map-marker-alt-solid.svg';
import BriefCase from '../assets/briefcase-solid.svg';
import PeopleDark from '../assets/people-dark.svg';
import PeopleLight from '../assets/people-light.svg';
import Star from '../assets/star.svg';

function ShowDataUser({ userData }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const countStars = async () => {
      const response = await fetch(userData.repos_url);
      const data = await response.json();
  
      const stars = await data.reduce((acc, repo) => {
        return acc + repo.stargazers_count;
      }, 0);
  
      setStars(stars);
    };

    countStars();
  }, [userData]);


  return (
    <div class=''>
      <div class='inline-flex w-4/5'>
        <img src={Pin} alt='pin map icon' class='w-4 mr-2' />
        <span class='text-gray font-display mr-4'>
          {userData.location || 'No location'}
        </span>
        <img src={BriefCase} alt='briefcase icon' class='w-4 mr-2' />
        <span class='text-gray font-display mr-4'>
          {userData.company || 'No company'}
        </span>
      </div>
      <div class='inline-flex'>
        <img src={PeopleDark} alt='people icon' class='w-4 mr-2' />
        <span class='text-gray font-display mr-4'>{userData.followers}</span>
        <img src={PeopleLight} alt='people icon' class='w-4 mr-2' />
        <span class='text-gray font-display mr-4'>{userData.following}</span>
        <img src={Star} alt="star icon" class='w-4 mr-2' />
        <span class='text-gray font-display mr-4'>{stars}</span>
      </div>
    </div>
  );
}

export default ShowDataUser;
