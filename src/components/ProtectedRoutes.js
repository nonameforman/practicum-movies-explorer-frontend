import { Outlet, Navigate } from 'react-router-dom';

export const ProtectedRoutes = ({ loggedIn }) => {

    // return loggedIn ? <Outlet /> : null
    return loggedIn ? <Outlet /> : <Navigate to='/' />
}
