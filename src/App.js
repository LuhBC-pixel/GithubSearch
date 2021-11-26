import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import ShowUser from './Components/ShowUser';
import NotFound from './Components/NotFound';

function App() {
  return (
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path='/' element={<Home />} />
      <Route path='/user' element={<ShowUser />} />
    </Routes>
  );
}

export default App;
