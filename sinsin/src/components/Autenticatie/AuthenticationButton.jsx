import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import {useNavigate} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';


export default function AuthenticationButton() {
  let navigate = useNavigate();
  const {
    isAuthenticated,
    user,
  } = useAuth0(); 

  if (isAuthenticated) { 
    const { picture, givenName } = user;
    return (
      <Nav>
      <Nav.Item className='pe-2'>
          <img style={{height:50}} src={picture} alt={givenName} onClick={()=> navigate(`/account`)}  className="rounded" />
      </Nav.Item>
      <LogoutButton />
      </Nav>
    );
  }

  return <LoginButton />;
}
