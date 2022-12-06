import { useAuth0 } from '@auth0/auth0-react';
import Nav from 'react-bootstrap/Nav';

function LogoutButton() {
  const { logout } = useAuth0();
  return (
    <Nav.Item>
    <button 
      type="button"
      className="text-white btn btn-secondary btn-lg"
      onClick={() => logout({
        returnTo: window.location.origin,
      })}
    >
      Log Out
    </button>
    </Nav.Item>
  );
}

export default LogoutButton;
