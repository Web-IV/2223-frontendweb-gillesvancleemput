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
        <div class="col-6">
            <div className="card my-2" style={{width: 300}}>
            <div className="card-body">
                <h5 className="card-title">{naam} : €{prijs}</h5>
                <p className="card-text">{beschrijving}</p>
                <hr className="solid"></hr>
                <button  type="button" className="btn btn-info  .25rem" onClick={handleDelete}>add item</button>
            </div>
            </div>
        </div>   
    );
        
});
     