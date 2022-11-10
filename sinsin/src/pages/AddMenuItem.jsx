import React, {useEffect } from 'react';
import Navigationbar from "../components/Navbar";
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
          await Api.createMenuItem({
            naam,
            prijs,
            type,
            beschrijving, 
          });
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
            setValue("naam", menu.naam);
            setValue("prijs", menu.prijs);
            setValue("type", menu.type);
            setValue("beschrijving", menu.beschrijving)
            }catch(error){
                console.error(error);
            }
        };
        fetchmenu();
    }, [id, reset, setValue]);



    return (
        <div>
        <Navigationbar  />
        <FormProvider 
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
        isSubmitting={isSubmitting}
        >
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <LabelInput label="Naam" name="naam" type="text" />
            <LabelInput label="Prijs" name="prijs" type="text" />
            <LabelInput label="Type" name="type" type="text" />
            <LabelInput label="Beschrijving" name="beschrijving" type="text" />

            <div className="clearfix">
            <div className="btn-group float-end">
              <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                {id ? "Save menu item " :"Add menu item"}
              </button>
            </div>
          </div>
            
        </form>
    </FormProvider>
        </div>
      );


}
export default  AddmenuItem;