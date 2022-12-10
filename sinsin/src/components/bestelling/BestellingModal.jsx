import React, { useCallback, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import BestellingForm from "./BestellingForm";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import useUser from "../../api/User";
import BestellingAfronden from "./BestellingAfronden";

function BestellingModal({ prijs }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { checkForUser } = useUser();
  const { isAuthenticated, user } = useAuth0();
  const [aanvullen, setAanvullen] = useState("");
  const [kost, setKost] = useState(0);

  const check = useCallback(async () => {
    console.log(isAuthenticated, "isAuthenticated");
    console.log(user, "user");
    if (isAuthenticated) {
      const data = await checkForUser(user.sub);
      console.log(data, "data");
      if (data === true) {
        setAanvullen(false);
      } else {
        setAanvullen(true);
      }
    }
    console.log(aanvullen, "aanvullen");
  }, [isAuthenticated, user, checkForUser, setAanvullen, aanvullen]);

  useEffect(() => {
    check();
    setKost(prijs);
    console.log(kost, "kost");
    console.log(prijs, "prijs");
  }, [check, prijs, kost]);

  return (
    <>
      <Button
        type="button"
        className="text display-1 btn btn-info .25rem mb-3"
        onClick={handleShow}
      >
        verder naar bestelling
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Bestelling afronden</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {aanvullen === true ? (
            <BestellingForm prijs={kost} />
          ) : (
            <BestellingAfronden prijs={kost} />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BestellingModal;
