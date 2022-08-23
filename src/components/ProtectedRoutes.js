import { Outlet } from 'react-router-dom';

export const ProtectedRoutes = ({ loggedIn }) => {

    return loggedIn ? <Outlet /> : null
}
