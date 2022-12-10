import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useBestelling from "../../api/bestelling";

const BestellingForm = ({ prijs }) => {
  const { createBestelling } = useBestelling();
  const Navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = useCallback(
    async (data) => {
      console.log("onsubmit");
      try {
        let list = JSON.parse(localStorage.getItem("bestelling"));
        list.map((element) => {
          delete element["prijs"];
          return element;
        });
        const { Email, Gemeente, Postcode, Straat, Huisnummer } = data;
        console.log(Email, Gemeente, Postcode, Straat, Huisnummer);
        const adres = { Email, Gemeente, Postcode, Straat, Huisnummer };
        await createBestelling(list, adres);
        localStorage.removeItem("bestelling");
        Navigate("/menu");
      } catch (error) {
        console.error(error);
      }
    },
    [createBestelling, Navigate]
  );

  return (
    <>
      <div className="col-sm-6 col-md-6 my-5 m-auto">
        <h2 className="mb-4">Levering adres</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="w-50 mb-3 m-auto">
          <div className="form-floating mb-3 ">
            <input
              {...register("Email", { required: true })}
              id="Email"
              type="text"
              className="form-control"
              placeholder="Email"
            />
            <label htmlFor="Email" className="form-label">
              Email:
            </label>
            {errors.Email && (
              <div className="alert alert-danger" role="alert">
                Email is required
              </div>
            )}
          </div>
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
          <div className="form-floating mb-3">
            <h3>Prijs: €{prijs}</h3>
          </div>
          <button type="submit" className="text-white btn btn-primary">
            Bestelling plaatsen
          </button>
        </form>
      </div>
    </>
  );
};
export default BestellingForm;
