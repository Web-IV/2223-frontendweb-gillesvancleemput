import "../../styles/home.css";
import useUser from "../../api/User";
import { useCallback, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AccountEmpty from "./accountEmpty";
import AccountInfo from "./accountInfo";

export default function Account() {
  const { checkForUser } = useUser();
  const { isAuthenticated, user } = useAuth0();
  const [db, setDb] = useState("");

  const getUser = useCallback(async () => {
    try {
      const gebruiker = await checkForUser(user.sub);
      setDb(gebruiker);
    } catch (error) {
      console.error(error);
    }
  }, [checkForUser, user.sub, setDb]);

  useEffect(() => {
    if (isAuthenticated) {
      getUser();
    }
  }, [getUser, isAuthenticated]);

  if (db === true) {
    return <AccountInfo />;
  }
  if (db === false) {
    return <AccountEmpty />;
  }
}
