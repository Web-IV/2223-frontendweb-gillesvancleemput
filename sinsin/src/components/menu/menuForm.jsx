import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import useMenuItems from "../../api/menuItems";

const AddmenuItem = () => {
  const { createMenuItem, updateMenuItemById, getByIdMenu } = useMenuItems();
  const navigate = useNavigate();
  const { id } = useParams();
  let [selectBox, setSelectBox] = useState("");
  const {
    setValue,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { naam, prijs, type, beschrijving } = data;
    try {
      if (!id) {
        await createMenuItem({
          naam,
          prijs,
          type,
          beschrijving,
        });
      } else {
        console.log(naam, prijs, type, beschrijving);
        await updateMenuItemById(id, {
          naam,
          prijs,
          type,
          beschrijving,
        });
      }
      navigate("/menu");
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (!id) {
      console.log("reset");
      reset();
      return;
    }
    const fetchmenu = async () => {
      try {
        const menu = await getByIdMenu(id);
        setValue("naam", menu.naam);
        setValue("prijs", menu.prijs);
        setValue("type", menu.type);
        setValue("beschrijving", menu.beschrijving);
        setSelectBox(menu.type);
      } catch (error) {
        console.error(error);
      }
    };
    fetchmenu();
  }, [id, reset, setValue, getByIdMenu]);

  return (
    <>
      <div className="row">
        <div className="col-md-12" style={{ height: 150 }}></div>
      </div>
      <div className="col-sm-6 col-md-6 my-5 m-auto">
        <div className="bg-light rounded h-100 p-4 m-auto ">
          <h2 className="mb-4">{id ? "Edit" : "Add"} menu item</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="w-50 mb-3 m-auto">
            <div className="form-floating mb-3">
              <input
                {...register("naam", { required: true })}
                id="naam"
                type="text"
                className="form-control"
                placeholder="naam"
              />
              <label htmlFor="naam" className="form-label">
                Naam
              </label>
              {errors.naam && (
                <div className="alert alert-danger" role="alert">
                  Naam is required
                </div>
              )}
            </div>
            <div className="form-floating mb-3">
              <input
                {...register("prijs", { required: true })}
                id="prijs"
                type="number"
                className="form-control"
                placeholder="prijs"
                required
                min={0}
              />
              <label htmlFor="prijs" className="form-label">
                Prijs
              </label>
              {errors.prijs && (
                <div className="alert alert-danger" role="alert">
                  Prijs is required
                </div>
              )}
            </div>
            <div className="form-floating mb-3">
              <select
                {...register("type", { required: true })}
                id="type"
                className="form-control"
                required
                onChange={(e) => setSelectBox(e.target.value)}
              >
                <option value="">Kies een type</option>
                <option value="Burgers & Wraps">Burgers & Wraps</option>
                <option value="Sushibowls">Sushibowls</option>
                <option value="To Add">To Add</option>
                <option value="Drinks">Drinks</option>
                <option value="Sauces">Sauces</option>
                <option value="Sides">Sides</option>
              </select>
              <label htmlFor="type" className="form-label">
                Type
              </label>
              {errors.type && (
                <div className="alert alert-danger" role="alert">
                  Type is required
                </div>
              )}
            </div>
            {selectBox === "" ||
            selectBox === "Burgers & Wraps" ||
            selectBox === "Sushibowls" ? (
              <div className="form-floating mb-3">
                <textarea
                  {...register("beschrijving", { required: true })}
                  id="beschrijving"
                  type="text"
                  className="form-control"
                  placeholder="beschrijving"
                  required
                />
                <label htmlFor="beschrijving" className="form-label">
                  Beschrijving
                </label>
                {errors.beschrijving && (
                  <div className="alert alert-danger" role="alert">
                    Beschrijving is required
                  </div>
                )}
              </div>
            ) : (
              ""
            )}
            <button type="submit" className="text-white btn btn-primary">
              {id ? "Edit" : "Add"}
            </button>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12" style={{ height: 250 }}></div>
      </div>
    </>
  );
};
export default AddmenuItem;
