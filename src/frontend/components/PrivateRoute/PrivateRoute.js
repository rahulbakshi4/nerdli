import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';

export const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { auth } = useAuth();
    return auth.isAuthenticated ? (
        children
    ) : (
        <Navigate to={'/login'} state={{ from: location }} replace={true} />)
}
