import { Link } from 'react-router-dom';

import Logo from '../assets/logo-horizontal.svg';
import Arrow from '../assets/arrow-left-solid.svg';

function Navbar() {
  return (
    <div class='flex justify-between'>
      <img src={Logo} alt='logo github' class='ml-20 pt-8' />
      <Link to='/'>
        <img src={Arrow} alt='arrow left icon' class='w-5 mr-20 mt-8' />
      </Link>
    </div>
  );
}

export default Navbar;
