import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import ShowUser from './Components/ShowUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<ShowUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
