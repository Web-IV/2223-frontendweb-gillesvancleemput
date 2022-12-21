import "bootstrap/dist/css/bootstrap.min.css";
import { memo, useState, useEffect } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import useUser from "../../api/User";
import * as userApi from "../../api/User";
import { ToastContainer, toast } from "react-toastify";

export default memo(function MenuItemCards({
  itemId,
  naam,
  prijs,
  beschrijving,
  onDelete,
  Rollen,
}) {
  let navigate = useNavigate();

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
    <div className="col" data-cy="menuItems">
      <div className="card my-2">
        <div className="card-body">
          <h5 className="card-title " data-cy="item-naam,prijs">
            {naam} : €{prijs}
          </h5>
          <p className="card-text" data-cy="item-beschrijving">
            {beschrijving}
          </p>
          <hr className="solid"></hr>
          <button
            type="button"
            className="btn btn-info  .25rem"
            data-cy="winkelmand"
            onClick={() => {
              Localstorage(itemId, prijs);
            }}
          >
            winkelmand
          </button>
        </div>
      </div>
      <div className="card-body">
        {Rollen === "admin" && (
          <button
            type="button"
            className="btn btn-danger px-2  .25rem"
            onClick={handleDelete}
            data-cy="delete-item"
          >
            delete item
          </button>
        )}
        {Rollen === "admin" && (
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
