import 'bootstrap/dist/css/bootstrap.min.css'
import { memo } from 'react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';


export default memo(function MenuCards({
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
        if(!old_data.includes(itemid)){
            old_data.push(itemid);
        }
        localStorage.setItem("bestelling", JSON.stringify(old_data));
      }
    return ( 
        <div className='col'>
            <div className="card mx-2 my-2 ">
            <div className="card-body">
                <h5 className="card-title">{naam} : €{prijs}</h5>
                <hr className="solid"></hr>
                <button  type="button" className="btn btn-info  .25rem" onClick={ () => Localstorage(itemId)}>add item</button>
            </div>
            </div>
            <div className="card-body">
                <button  type="button" className="btn btn-danger px-2  .25rem" onClick={handleDelete}>delete item</button>
                <button  type="button" className="btn btn-warning px-2 .25rem" onClick={()=> navigate(`/menu/edititem/${itemId}`)}>item aanpassen</button>
            </div>
        </div>    
    );
});