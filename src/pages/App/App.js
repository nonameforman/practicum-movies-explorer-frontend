import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LandingPage } from '../LandingPage';
import { MoviesPage } from '../MoviesPage';
import { SavedMoviesPage } from '../SavedMoviesPage';
import { ProfilePage } from '../ProfilePage';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { NotFound } from '../NotFound/NotFound';
import { ProtectedRoutes } from '../../components/ProtectedRoutes';
import { AuthRoutes } from '../../components/AuthRoutes';
import { getInfo } from '../../utils/auth';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const App = () => {

  const [loggedIn, setloggedIn] = useState(false);

  const location = useLocation();

  const handleLogin = () => {
    setloggedIn(true);
  };

  const [userContext, setUserContext] = useState({});

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getInfo(localStorage.getItem('token'))
        .then((user) => {
          setUserContext(user);
          setloggedIn(true)
        })
        .catch((err) => {
          console.log(`Передан некорректный токен ${err}`);
          setloggedIn(false);
        })
    } else {
      setloggedIn(false);
    }
  }, [loggedIn, location]);

  return (
    <div className='App'>
      <CurrentUserContext.Provider value={{userContext, setUserContext}}>
        <Routes>
            <Route path='/' element={<LandingPage loggedIn={loggedIn} />} />
            <Route path='*' element={<NotFound />} />
            <Route element={<AuthRoutes loggedIn={loggedIn} />} >
              <Route path='/signin' element={<Login handleLogin={handleLogin} />} />
              <Route path='/signup' element={<Register handleLogin={handleLogin} />} />
            </Route>
          <Route element={<ProtectedRoutes loggedIn={loggedIn} />} >
            <Route path='/movies' element={<MoviesPage />} />
            <Route path='/saved-movies' element={<SavedMoviesPage />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Route>
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
