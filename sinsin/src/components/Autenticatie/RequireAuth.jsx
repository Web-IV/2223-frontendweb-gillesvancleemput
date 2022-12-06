import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router';


export default function RequireAuth({ children }) { // 👈 1
  const { isAuthenticated } = useAuth0();


  if (isAuthenticated) { // 👈 3
    return children;
  }

  return <Navigate to="/login" />; // 👈 4
}
