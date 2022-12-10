import { useAuth0 } from "@auth0/auth0-react";
import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import useBestelling from "../../api/bestelling";
import useUser from "../../api/User";

const BestellingAfronden = ({ prijs }) => {
  const [kost, setKost] = useState(0);
  const { getByAuth0Id } = useUser();
  const { isAuthenticated, user } = useAuth0();
  const [postcode, setPostcode] = useState(0);
  const [straat, setStraat] = useState();
  const [huisnummer, setHuisnummer] = useState();
  const [gemeente, setGemeente] = useState();
  const Navigate = useNavigate();
  const { createBestelling } = useBestelling();

  const getUserInfo = useCallback(async () => {
    if (isAuthenticated) {
      const data = await getByAuth0Id(user.sub);
      setPostcode(data.data.postcode);
      setStraat(data.data.straat);
      setHuisnummer(data.data.huisnummer);
      setGemeente(data.data.gemeente);
      console.log(data.data);
    }
  }, [isAuthenticated, user, getByAuth0Id]);

  const onSubmit = useCallback(
    async (data) => {
      console.log("onsubmit");
      try {
        let list = JSON.parse(localStorage.getItem("bestelling"));
        list.map((element) => {
          delete element["prijs"];
          return element;
        });
        await createBestelling(list);
        localStorage.removeItem("bestelling");
        Navigate("/menu");
      } catch (error) {
        console.error(error);
      }
    },
    [createBestelling, Navigate]
  );

  useEffect(() => {
    setKost(prijs);
    getUserInfo();
  }, [prijs, getUserInfo]);

  return (
    <>
      <div className="row">
        <div className="col my-3 ms-5">
          <p className="card-header h2">Levering adres:</p>
          <div className="card-body  mt-3">
            <p className="h5">Gemeente: {gemeente}</p>
            <p className="h5">Straat: {straat}</p>
            <p className="h5">Huisnummer: {huisnummer}</p>
            <p className="h5">Postcode: {postcode}</p>
          </div>
          <button className="btn btn-info">Adres weizigen</button>
        </div>
        <div className="col my-3 mt-5 text-center">
          <p className="card-header text-center h3">Totaal prijs:</p>
          <p className="h4 text-center">€{kost}</p>
          <button className="btn btn-info mt-3" onClick={onSubmit}>
            Bestelling Plaatsen
          </button>
        </div>
      </div>
    </>
  );
};
export default BestellingAfronden;
