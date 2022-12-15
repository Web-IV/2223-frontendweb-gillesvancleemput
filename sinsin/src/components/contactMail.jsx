import React, { useCallback, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import emailjs from "@emailjs/browser";

function Contact() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ius902h",
        "template_mttlqao",
        e.target,
        "397DAYSkx8lELcRdJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <Button
        type="button"
        className="text display-1 btn btn-info .25rem mb-3"
        onClick={handleShow}
      >
        Contacteer ons
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
          <Modal.Title>Mail versturen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="container">
              <form onSubmit={sendEmail} ref={form}>
                <div className="row pt-5 mx-auto">
                  <div className="col-8 form-group mx-auto">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Naam"
                      name="name"
                    />
                  </div>
                  <div className="col-8 form-group pt-2 mx-auto">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Adres"
                      name="email"
                    />
                  </div>
                  <div className="col-8 form-group pt-2 mx-auto">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Onderwerp"
                      name="subject"
                    />
                  </div>
                  <div className="col-8 form-group pt-2 mx-auto">
                    <textarea
                      className="form-control"
                      id=""
                      cols="30"
                      rows="8"
                      placeholder="Bericht"
                      name="message"
                    ></textarea>
                  </div>
                  <div className="col-8 pt-3 mx-auto">
                    <input
                      type="submit"
                      className="btn btn-info"
                      value="Verstuur bericht"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Contact;
