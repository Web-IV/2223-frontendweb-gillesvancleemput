import 'bootstrap/dist/css/bootstrap.min.css'
import { memo } from 'react';
import { useCallback, useState } from 'react';
import Table from 'react-bootstrap/Table';


export default memo(function BestellingItem({
    itemId,
    naam,
    prijs,
    beschrijving,
    onDelete,
    prijsbereken,
}) 
{
    const handleDelete = useCallback((event) => {
        event.preventDefault();
        onDelete(itemId);
      }, [itemId, onDelete]);



    let [aantal, setAantal] = useState(0);
    const data = JSON.parse(localStorage.getItem("bestelling"));
    data.filter((item) => {
        if(item.itemId === itemId){
            aantal = item.aantal;
        }
        return aantal;
    });
    const plusAantal = () => {
        const data = JSON.parse(localStorage.getItem("bestelling"));
        aantal = aantal + 1;
        data.filter((item) => {
            if(item.itemId === itemId){
                item.aantal = aantal;
            }
            return item;
        });
        setAantal(aantal);
        localStorage.setItem("bestelling", JSON.stringify(data));
        prijsbereken();
    };

    const minAantal = () => {
        const data = JSON.parse(localStorage.getItem("bestelling"));
        if(aantal > 1){
            aantal = aantal - 1;
            data.filter((item) => {
                if(item.itemId === itemId){
                    item.aantal = aantal;
                }
                return item;
            });
            setAantal(aantal);
            localStorage.setItem("bestelling", JSON.stringify(data));
            prijsbereken();
        }
    };


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
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <button className="btn btn-dark btn-sm" onClick={plusAantal} >+</button>
                                    </div>
                                    <input type="number" id="qty_input" className="form-control form-control-sm" value={aantal}  min="1"/>
                                    <div className="input-group-prepend">
                                        <button className="btn btn-dark btn-sm" onClick={minAantal}>-</button>
                                    </div>
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