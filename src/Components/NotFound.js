import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>User not found</p>
      <Link to='/'>Go to home</Link>
    </div>
  );
}

export default NotFound;
