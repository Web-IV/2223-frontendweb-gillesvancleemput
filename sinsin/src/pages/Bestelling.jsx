import { useMemo } from 'react';
import { useState, useEffect, useCallback } from 'react'; 
import * as Api from '../api/menuItems'; 
import BestellingItem from '../components/bestellingItem';





export default function Bestelling(){
    const [bestellingItems, setbestellingItems] = useState([]);

    // let navigate = useNavigate();


    const refreshItems = useCallback(async () => {
      try {
        const data = await Api.getAllMenuItems();
        const items = JSON.parse(localStorage.getItem("bestelling"));
        const result = data.filter(({ itemId }) => items.includes(itemId));
        setbestellingItems(result);
      } catch (error) {
        console.error(error);
      } 
    }, []);

    useEffect(() => {
      refreshItems();
    }, [refreshItems]);

    
    

    const handleDelete = useCallback(async (idToDelete) => {
        try {
          const items = JSON.parse(localStorage.getItem("bestelling"));
          const index = items.findIndex((item) => item === idToDelete);
          items.splice(index, 1);
          localStorage.setItem('bestelling', JSON.stringify(items));
          refreshItems();

        } catch (error) {
          console.error(error);
        }
      }, [refreshItems]);
    
    return ( 
      <>
      <div className="container-fluid py-5 px-5 py-3">
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-2">
                        </div>
                        <div className="col-md-8">
                            <div className="card text-center">
                                <div className="text card-header text-start px-5">
                                    winkelmand
                                </div>
                                <div className="card-body">
                                    {bestellingItems
                                        .map((item) => (
                                            <BestellingItem key={item.itemId} {...item} onDelete={handleDelete} />
                                    ))}
                                </div>
                                <div className="text card-footer text-end px-5">
                                    totaal prijs
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
     );
}