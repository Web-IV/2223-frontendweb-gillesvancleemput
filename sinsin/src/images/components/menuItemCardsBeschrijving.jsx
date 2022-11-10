import 'bootstrap/dist/css/bootstrap.min.css'
import { memo } from 'react';
import { useCallback } from 'react';
 



export default memo(function MenuItemCards({
    itemId,
    naam,
    prijs,
    beschrijving,
    onDelete,
}) 
{
    const handleDelete = useCallback((event) => {
        event.preventDefault();
        onDelete(itemId);
      }, [itemId, onDelete]);

    return ( 
        
        <div className=" card width: 18rem; col-lg-9 col-md-9 col-sm-9 col-xs-12 .bg-light   ">
        <div >
            <h5 >{naam}</h5>
            <span >{ beschrijving}</span>
            <div >
            <p>€{prijs}</p>
        </div>
        </div>
        <button  type="button" className="btn btn-danger  .25rem" onClick={handleDelete}>delete</button>
        <button  type="button" className="btn btn-danger  .25rem" onClick={handleDelete}>delete</button>
        </div>
    );
        
});
     