import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useUser from "../../api/User";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Aanpassen = ({ email, straat, huisnummer, postcode, gemeente }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { updateUser } = useUser();
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = useCallback(
    async (data) => {
      console.log("onsubmit");
      try {
        const { Gemeente, Postcode, Straat, Huisnummer } = data;
        await updateUser(email, Straat, Huisnummer, Postcode, Gemeente);
        console.log("update uitgevoerd");
        setShow(false);
      } catch (error) {
        console.error(error);
      }
    },
    [email, updateUser]
  );

  useEffect(() => {
    const fetchmenu = async () => {
      try {
        setValue("Gemeente", gemeente);
        setValue("Huisnummer", huisnummer);
        setValue("Straat", straat);
        setValue("Postcode", postcode);
      } catch (error) {
        console.error(error);
      }
    };
    fetchmenu();
  }, [email, straat, huisnummer, postcode, gemeente, setValue]);

  return (
    <>
      <Button
        type="button"
        className="text display-5 btn btn-info .25rem mb-3"
        onClick={handleShow}
      >
        account info aanpassen
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
          <Modal.Title>Account info aanpassen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col-sm-6 col-md-6 my-5 m-auto">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-60 mb-3 m-auto"
            >
              <div className="form-floating mb-3 h4 ">email: {email}</div>
              <div className="form-floating mb-3">
                <input
                  {...register("Gemeente", { required: true })}
                  id="Gemeente"
                  type="text"
                  className="form-control"
                  placeholder="Gemeente"
                />
                <label htmlFor="Gemeente" className="form-label">
                  Gemeente:
                </label>
                {errors.Gemeente && (
                  <div className="alert alert-danger" role="alert">
                    Gemeente is required
                  </div>
                )}
              </div>
              <div className="form-floating mb-3">
                <input
                  {...register("Postcode", { required: true })}
                  id="Postcode"
                  type="number"
                  className="form-control"
                  placeholder="Postcode"
                />
                <label htmlFor="Postcode" className="form-label">
                  Postcode:
                </label>
                {errors.Gemeente && (
                  <div className="alert alert-danger" role="alert">
                    Postcode is required
                  </div>
                )}
              </div>
              <div className="form-floating mb-3">
                <input
                  {...register("Straat", { required: true })}
                  id="Straat"
                  type="text"
                  className="form-control"
                  placeholder="Straat"
                />
                <label htmlFor="Straat" className="form-label">
                  Straat:
                </label>
                {errors.Straat && (
                  <div className="alert alert-danger" role="alert">
                    Straat is required
                  </div>
                )}
              </div>
              <div className="form-floating mb-3">
                <input
                  {...register("Huisnummer", { required: true })}
                  id="Huisnummer"
                  type="number"
                  className="form-control"
                  placeholder="Huisnummer"
                />
                <label htmlFor="Huisnummer" className="form-label">
                  Huisnummer:
                </label>
                {errors.Huisnummer && (
                  <div className="alert alert-danger" role="alert">
                    Huisnummer is required
                  </div>
                )}
              </div>
              <button type="submit" className="text-white btn btn-primary">
                aanpassen
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default Aanpassen;
