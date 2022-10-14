import './App.css';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from '../LandingPage';
import { MoviesPage } from '../MoviesPage';
import { SavedMoviesPage } from '../SavedMoviesPage';
import { ProfilePage } from '../ProfilePage';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { NotFound } from '../NotFound/NotFound';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/saved-movies' element={<SavedMoviesPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
