import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import { useEffect } from "react";
import useUser from "../../api/User";
import { useAuth0 } from "@auth0/auth0-react";
import Aanpassen from "./accountAanpassen";
import History from "./accountHistory";

export default function AccountEmpty() {
  const Navigate = useNavigate();
  const { getByAuth0Id } = useUser();
  const { isAuthenticated, user } = useAuth0();
  const { picture, givenName } = user;
  const [email, setEmail] = useState("");
  const [straat, setStraat] = useState("");
  const [huisnummer, setHuisnummer] = useState("");
  const [postcode, setPostcode] = useState("");
  const [gemeente, setGemeente] = useState("");

  const navigate = useCallback(() => {
    Navigate("/menu");
  }, [Navigate]);

  const getUser = useCallback(async () => {
    const gebruiker = await getByAuth0Id(user.sub);
    setEmail(gebruiker.data.email);
    setStraat(gebruiker.data.straat);
    setHuisnummer(gebruiker.data.huisnummer);
    setPostcode(gebruiker.data.postcode);
    setGemeente(gebruiker.data.gemeente);
  }, [getByAuth0Id, user.sub]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <>
      <div className="row">
        <div className="col-md-12" style={{ height: 150 }}></div>
      </div>
      <div className="container-fluid py-5 px-5 py-3">
        <div className="row justify-content-center">
          <div className="card text-center my-5 col-md-6">
            <div className="card-header">
              <h2 className="mt-2">Account info:</h2>
            </div>
            <div className="card-body">
              <div className="row justify-content-center">
                <img
                  style={{ height: 80, width: 100 }}
                  src={picture}
                  alt={givenName}
                  onClick={() => onclick()}
                  className="rounded"
                />
                <h1 className="mt-2">{user.name}</h1>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <History
                    email={email}
                    straat={straat}
                    huisnummer={huisnummer}
                    postcode={postcode}
                    gemeente={gemeente}
                  />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="card mb-3 mx-auto w-70">
                  <div className="row justify-content-center my-4">
                    <div className="col-md-6 text-start">
                      <h4 className="mt-2">Email: {email}</h4>
                      <h4 className="mt-2">gemeente: {gemeente}</h4>
                      <h4 className="mt-2">straat: {straat}</h4>
                      <h4 className="mt-2">huisnummer: {huisnummer}</h4>
                      <h4 className="mt-2">postcode: {postcode}</h4>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <Aanpassen
                        email={email}
                        straat={straat}
                        huisnummer={huisnummer}
                        postcode={postcode}
                        gemeente={gemeente}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12" style={{ height: 150 }}></div>
      </div>
    </>
  );
}
