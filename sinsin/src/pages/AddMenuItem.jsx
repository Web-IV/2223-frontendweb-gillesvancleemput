import React, {useEffect } from 'react';
import {FormProvider, useForm, useFormContext} from 'react-hook-form';
import {useNavigate, useParams} from 'react-router-dom';
import * as Api from '../api/menuItems';


function LabelInput({ label, name, type, ...rest }) {
    const { register, errors, isSubmitting } = useFormContext();
    const hasError = name in errors;
    return (
      <div className="mb-3">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <input
          {...register(name)}
          id={name}
          type={type}
          className="form-control"
          disabled={isSubmitting}
          {...rest}
        />
        {hasError ? <div className="form-text text-danger">{errors[name].message}</div> : null}
      </div>
    );
  }



const AddmenuItem = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    console.log(id);
    console.log(Api.getByIdMenu(id));
    const {
        setValue,
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
      } = useForm();

      const onSubmit = async (data) => {
        const { naam ,prijs,type,beschrijving } = data;
        try {
          if (!id) {
            await Api.createMenuItem({
              naam,
              prijs,
              type,
              beschrijving, 
            });
          }else{
            await Api.updateMenuItemById(id, {
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
        if(!id){
            reset();
            return;
        }
        const fetchmenu = async () => {
            try{
            const menu = await Api.getByIdMenu(id);
            setValue("naam", menu[0].naam);
            setValue("prijs", menu[0].prijs);
            setValue("type", menu[0].type);
            setValue("beschrijving", menu[0].beschrijving)
            }catch(error){
                console.error(error);
            }
        };
        fetchmenu();
    }, [id, reset, setValue]);




    return (
      <>
        <div>
        <FormProvider 
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
        isSubmitting={isSubmitting}
        >
          <form className='form ' onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-12">
              <div className="Auth-form-container">
                <div className="Auth-form-content ">
                    <h3 className="Auth-form-title">Menu item</h3>
                    <div className="form-group mt-3">
                    <LabelInput
                      label="Naam"
                      name="naam"
                      type="text"
                      className="form-control mt-1"
                      placeholder="geef naam"
                    />
                    <LabelInput
                      label="Prijs"
                      name="prijs"
                      type="integer"
                      className="form-control mt-1"
                      placeholder="geef prijs"
                    />
                    <LabelInput
                      label="Type" 
                      name="type"
                      type="select"
                      className="form-control mt-1"
                      placeholder="geef type"
                    />
                    <select id="type" name="type" className="form-control mt-1" >
                        <option selected>kies een type</option>
                        <option name="Type" value="Burgers & Wraps" >Burgers & Wraps</option>
                        <option name="Type" value="Drinks" >Drinks</option>
                        <option name="Type" value="Sushibowls" >Sushibowls</option>
                        <option name="Type" value="To Add" >To Add</option>
                        <option name="Type" value="Sauces" >Sauces</option>
                        <option name="Type" value="Sides" >Sides</option>
                      </select>
                    <LabelInput
                      label="Beschrijving" 
                      name="beschrijving"
                      type="text"
                      className="form-control mt-1"
                      placeholder="geef beschrijving"
                    />
                    </div>
                    <div className="clearfix">
                    <div className="btn-group float-center py-3">
                      <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                        {id ? "menu item opslaan" :"menu item toevoegen"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        </FormProvider>
        </div>
      </>
      );
}
export default  AddmenuItem;