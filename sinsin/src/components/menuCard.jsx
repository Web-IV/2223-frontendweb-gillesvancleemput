import 'bootstrap/dist/css/bootstrap.min.css'
import { memo } from 'react';
import { useCallback } from 'react';


export default memo(function MenuCards({
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
        <div className=" card col-lg-9 col-md-9 col-sm-9 col-xs-12 .bg-light   ">
        <table>
            <tr>
                <td>
                    <h5>{naam}</h5>
                </td>
                <td>
                    <span >€{prijs}</span>
                </td>
            </tr>
        </table>
        <button  type="button" className="btn btn-danger  .25rem" onClick={handleDelete}>delete</button>
        </div>
    );
});