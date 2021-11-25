import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import ShowUser from './Components/ShowUser';
import NotFound from './Components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<ShowUser />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
