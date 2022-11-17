import 'bootstrap/dist/css/bootstrap.min.css'
import { memo } from 'react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';


export default memo(function BestellingItem({
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
        <div className="col-8 mx-5">
            <div className="card my-2">
            <div className="card-body">
            <Table className="striped bordered hover">
                <thead>
                    <tr>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-4">
                                    <th ><h5 className="card-title">{naam}</h5></th>
                                </div>
                                <div className="col-md-4">
                                    <th >€{prijs}</th>
                                </div>
                                <div className="col-md-4">
                                    <th><button  type="button" className="btn btn-danger  .25rem" onClick={handleDelete}>delete</button></th>
                                </div>
                            </div>  
                        </div>
                    </tr>
                </thead>
            </Table>
            </div>
            </div>
        </div>   
    );
        
});