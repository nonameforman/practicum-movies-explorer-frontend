import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { LandingPage } from '../LandingPage';
import { MoviesPage } from '../MoviesPage';
import { SavedMoviesPage } from '../SavedMoviesPage';
import { ProfilePage } from '../ProfilePage';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { NotFound } from '../NotFound/NotFound';
import { ProtectedRoutes } from '../../components/ProtectedRoutes';
import { getInfo } from '../../utils/auth';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const App = () => {

  const [loggedIn, setloggedIn] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    setloggedIn(true);
  };

  const [userContext, setUserContext] = useState({});

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      getInfo(token).then((user) => {
        setloggedIn(true);
        setUserContext(user);
      }).catch((err) => {
        setloggedIn(false);
        navigate('/');
        console.error(err);
      })
    } else {
      setloggedIn(false);
      navigate('/')
    }
  }, [token]);

  return (
    <div className='App'>
      <CurrentUserContext.Provider value={{userContext, setUserContext}}>
        <Routes>
            <Route path='/' element={<LandingPage loggedIn={loggedIn }  />} />
          <Route path='/signin' element={<Login handleLogin={handleLogin}/>} />
          <Route path='/signup' element={<Register handleLogin={handleLogin}/>} />
          <Route path='*' element={<NotFound />} />
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
