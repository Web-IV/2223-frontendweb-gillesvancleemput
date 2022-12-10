import "bootstrap/dist/css/bootstrap.min.css";
import { memo, useState, useEffect } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import useUser from "../../api/User";
import * as userApi from "../../api/User";

export default memo(function MenuItemCards({
  itemId,
  naam,
  prijs,
  beschrijving,
  onDelete,
}) {
  let navigate = useNavigate();
  const { isAuthenticated, user } = useAuth0();
  const [rol, setRol] = useState("");
  const { getByAuth0Id } = useUser();

  const handleDelete = useCallback(
    (event) => {
      event.preventDefault();
      onDelete(itemId);
    },
    [itemId, onDelete]
  );

  //kijk welke gebruiker is ingelogd en haal zijn rol op

  function Localstorage(itemid) {
    if (localStorage.getItem("bestelling") === null) {
      localStorage.setItem("bestelling", "[]");
    }
    const old_data = JSON.parse(localStorage.getItem("bestelling"));
    const checkIds = [];
    old_data.map((item) => {
      return checkIds.push(item.itemId);
    });
    if (!checkIds.includes(itemid)) {
      old_data.push({ itemId: itemId, aantal: 1, prijs: prijs });
    }
    localStorage.setItem("bestelling", JSON.stringify(old_data));
  }

  return (
    <div className="col">
      <div className="card my-2">
        <div className="card-body">
          <h5 className="card-title ">
            {naam} : €{prijs}
          </h5>
          <p className="card-text">{beschrijving}</p>
          <hr className="solid"></hr>
          <button
            type="button"
            className="btn btn-info  .25rem"
            onClick={() => {
              Localstorage(itemId, prijs);
            }}
          >
            winkelmand
          </button>
        </div>
      </div>
      <div className="card-body">
        {rol === "admin" && (
          <button
            type="button"
            className="btn btn-danger px-2  .25rem"
            onClick={handleDelete}
          >
            delete item
          </button>
        )}
        {rol === "admin" && (
          <button
            type="button"
            className="btn btn-warning px-2 .25rem"
            onClick={() => navigate(`/menu/edititem/${itemId}`)}
          >
            item aanpassen
          </button>
        )}
      </div>
    </div>
  );
});
