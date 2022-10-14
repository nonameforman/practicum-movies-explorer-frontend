import { Outlet, Navigate } from 'react-router-dom';

export const AuthRoutes = ({ loggedIn }) => {
    return !loggedIn ? <Outlet /> : <Navigate to='/' />
}