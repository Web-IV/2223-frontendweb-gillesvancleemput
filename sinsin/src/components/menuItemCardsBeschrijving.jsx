import 'bootstrap/dist/css/bootstrap.min.css'
import { memo } from 'react';
import { useCallback} from 'react';
import {useNavigate, useState } from 'react-router-dom';


export default memo(function MenuItemCards({
    itemId,
    naam,
    prijs,
    beschrijving,
    onDelete,
}) 
{

    let navigate = useNavigate();
    const handleDelete = useCallback((event) => {
        event.preventDefault();
        onDelete(itemId);
      }, [itemId, onDelete]);

      function Localstorage(itemid){
        if(localStorage.getItem("bestelling") === null){
            localStorage.setItem("bestelling", "[]");
        }
        const old_data = JSON.parse(localStorage.getItem("bestelling"));
        const checkIds = [];
        old_data.map((item) => {
             return checkIds.push(item.itemId);
        });
        if(!checkIds.includes(itemid)){
            old_data.push({"itemId":itemId,"aantal":1,"prijs":prijs});
        }
        localStorage.setItem("bestelling", JSON.stringify(old_data));
        ('item toegevoegd aan de bestelling').alert();
      }
      function Alert(){
        alert('item toegevoegd aan de bestelling');
    }


    return ( 
        <div className="col">
            <div className="card my-2">
            <div className="card-body">
                <h5 className="card-title">{naam} : €{prijs}</h5>
                <p className="card-text">{beschrijving}</p>
                <hr className="solid"></hr>
                <button  type="button" className="btn btn-info  .25rem" onClick={ () => {Alert(); Localstorage(itemId,prijs);}} >winkelmand</button>
            </div>
            </div>
            <div className="card-body">
                <button  type="button" className="btn btn-danger px-2  .25rem" onClick={handleDelete}>delete item</button>
                <button  type="button" className="btn btn-warning px-2 .25rem" onClick={()=> navigate(`/menu/edititem/${itemId}`)}>item aanpassen</button>
            </div>
        </div>   
    );
        
});
     