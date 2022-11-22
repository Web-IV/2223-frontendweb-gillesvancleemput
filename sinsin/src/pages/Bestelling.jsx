import { useState, useEffect, useCallback } from 'react'; 
import * as Api from '../api/menuItems'; 
import * as Api2 from '../api/bestelling';
import BestellingItem from '../components/bestellingItem';





export default function Bestelling(){
    const [bestellingItems, setbestellingItems] = useState([]);
    const [totprijs, setTotprijs] = useState(0);
    let userId = "f98b5c03-8589-4b04-8977-1edd0a931bd8";

    // let navigate = useNavigate();
    const refreshItems = useCallback(async () => {
      try {
        const data = await Api.getAllMenuItems();
        const items = JSON.parse(localStorage.getItem("bestelling"));
        const Ids = [];
        items.map((item) => {
             return Ids.push(item.itemId);
        });
        const result = data.filter(({ itemId }) => Ids.includes(itemId));
        setbestellingItems(result);
        setTotprijs(items.reduce((a, b) => a + b.prijs * b.aantal, 0));
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
          const Ids = [];
          items.map((item) => {
              return Ids.push(item[0]);
          });
          const index = items.findIndex((item) => item.itemId === idToDelete);
          items.splice(index, 1);
          localStorage.setItem('bestelling', JSON.stringify(items));
          refreshItems();

        } catch (error) {
          console.error(error);
        }
      }, [refreshItems]);

    const create = useCallback(async () => {
      if(bestellingItems.length > 0){
        try {
          let list = JSON.parse(localStorage.getItem("bestelling"));
          list.map(element => {
            delete element['prijs'];
            return element;
          });
          userId = JSON.stringify(userId);
          list = JSON.stringify(list);
          console.log(userId);
          console.log(list);
          await Api2.createBestelling(userId, list);
          localStorage.removeItem("bestelling");
          refreshItems();
        } catch (error) {
          console.error(error);
        }
      }
    }, [refreshItems, bestellingItems]);

    
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
                                    <h3>totaal prijs</h3>
                                    <h3>€{totprijs}</h3>
                                    <button  type="button" className="btn btn-info  .25rem" onClick={create}>plaats bestelling</button>
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