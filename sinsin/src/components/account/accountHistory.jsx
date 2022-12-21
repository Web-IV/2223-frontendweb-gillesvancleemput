import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useUser from "../../api/User";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useBestelling from "../../api/bestelling";
import HistoryElement from "./accountHistoryElement";

const History = () => {
  const { getAllBestellingen } = useBestelling();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [bestellingen, setBestellingen] = useState([]);

  useEffect(() => {
    const fetchBestellingen = async () => {
      try {
        const bestellingen = await getAllBestellingen();
        setBestellingen(bestellingen);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBestellingen();
  }, [getAllBestellingen]);
  return (
    <>
      <Button
        type="button"
        className="text display-5 btn btn-info .25rem mb-3"
        onClick={handleShow}
        data-cy="history"
      >
        Bestel geschiedenis
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
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {bestellingen.map((bestelling) => (
            <HistoryElement
              key={bestelling.bestellingId}
              bestelling={bestelling}
            />
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
};
export default History;
