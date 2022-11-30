import { useState, useEffect, useCallback} from 'react'; 
import * as Api from '../api/menuItems'; 
import * as Api2 from '../api/bestelling';
import {useNavigate} from 'react-router-dom';
import BestellingItem from '../components/bestellingItem';





export default function Bestelling(){
    const [bestellingItems, setbestellingItems] = useState([]);
    const [totprijs, setTotprijs] = useState(0);
    const userId = "f98b5c03-8589-4b04-8977-1edd0a931bd8";
    const Navigate = useNavigate();

    const prijs = useCallback(async () => {
      const items = JSON.parse(localStorage.getItem("bestelling"));
      if(items){
        setTotprijs(items.reduce((a, b) => a + b.prijs * b.aantal, 0));
      }
      else{
        setTotprijs(0);
      }
    }, []);

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
        prijs();
      } catch (error) {
        console.error(error);
      } 
    }, [prijs]);

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
          prijs();

        } catch (error) {
          console.error(error);
        }
      }, [refreshItems, prijs]);

    const create = useCallback(async () => {
      if(bestellingItems.length > 0){
        try {
          let list = JSON.parse(localStorage.getItem("bestelling"));
          list.map(element => {
            delete element['prijs'];
            return element;
          });
          await Api2.createBestelling(userId, list);
          setbestellingItems([]);
          localStorage.removeItem("bestelling");
          prijs();

        } catch (error) {
          console.error(error);
        }
      }
    }, [bestellingItems, prijs]);
    const navigate  = useCallback(() => {
        Navigate('/menu');
    }, [Navigate]); 

    if (bestellingItems.length === 0) {
      return (
        <>
        <div className="row">
          <div className="col-md-12" style={{height: 150}}>
          </div>
        </div>
        <div className="container-fluid py-5 px-5 py-3">
          <div className="row">
            <div className="col-md-4">
            </div>
            <div className="card text-center my-5 col-md-4">
              <h1 className="mt-5">Bestelling</h1>
              <p className="mb-5">Uw winkelmand is leeg</p>
              <div className="text card-footer text-center px-5">
                <button  type="button" className="btn btn-info .25rem" onClick={navigate}>terug naar menu</button>
              </div>
            </div>
            <div className="col-md-4">
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12" style={{height: 150}}>
          </div>
        </div>
        </>
      );
    }
    return ( 
      <>
      <div className="row">
          <div className="col-md-1" style={{height: 150}}>
          </div>
      </div>
      <div className="container">
            <div className="row  d-flex justify-content-center">
                <div className="col-sm-8 col-md-10 col-lg-9">
                    <div className="card text-center">
                        <div className="display-6 card-header text-center px-5">
                            Mijn bestelling
                        </div>
                        <div className="card-body ">
                            {bestellingItems
                                .map((item) => (
                                    <BestellingItem key={item.itemId} {...item} onDelete={handleDelete} prijsbereken={prijs}  />
                            ))}
                        </div>
                        <div className="text card-footer text-end px-5">
                            <h3 className="pt-3">totaal prijs: ${totprijs}</h3>
                            <button  type="button" className="text display-1 btn btn-info .25rem mb-3" onClick={create}>verder naar bestelling</button>
                        </div>
                      </div>
                </div>
            </div>
        </div>
        <div className="row">
          <div className="col-md-12" style={{height: 350}}>
          </div>
      </div>
      </>
     );
}