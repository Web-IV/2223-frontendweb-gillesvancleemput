import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import useUser from "../../api/User";
import { useCallback } from "react";

export default function AuthenticationButton() {
  let navigate = useNavigate();
  const { create } = useUser();
  const { isAuthenticated, user } = useAuth0();

  const todb = useCallback(async () => {
    try {
      await create();
    } catch (error) {
      console.error(error);
    }
  }, [create]);

  function onclick() {
    todb();
    navigate(`/account`);
  }

  if (isAuthenticated) {
    const { picture, givenName } = user;
    return (
      <Nav>
        <Nav.Item className="pe-2">
          <img
            style={{ height: 50 }}
            src={picture}
            alt={givenName}
            onClick={() => onclick()}
            className="rounded"
          />
        </Nav.Item>
        <LogoutButton />
      </Nav>
    );
  }

  return <LoginButton />;
}
