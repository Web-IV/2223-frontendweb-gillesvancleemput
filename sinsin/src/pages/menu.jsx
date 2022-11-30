
import { useState, useEffect, useCallback } from 'react'; 
import * as Api from '../api/menuItems'; 
import MenuItemCards from "../components/menuItemCardsBeschrijving";
import MenuCard from "../components/menuCard";
import { useNavigate } from 'react-router-dom';



export default function Menu(){
    const [menuItems, setMenuItems] = useState([]);
    let navigate = useNavigate();

    const refreshItems = useCallback(async () => {
      try {
        const data = await Api.getAllMenuItems();
        setMenuItems(data);
      } catch (error) {
        console.error(error);
      } 
    }, []);

    useEffect(() => {
      refreshItems();
    }, [refreshItems]);

    const handleDelete = useCallback(async (idToDelete) => {
        try {
          await Api.deleteByIdMenu(idToDelete);
          const newItems = menuItems.filter((item) => item.itemId !== idToDelete);
          setMenuItems( newItems);
        } catch (error) {
          console.error(error);
        }
      }, [menuItems]);

    return ( 
      <>
            <div className="menu">
              <div className="container">            
                <div className="row">
                  <div className="col d-flex flex-wrap justify-content-center">
                    <img alt="sin sin logo" src={"images/sinsin_sinsin-schild-blue.png"} style={{ width:242 , height: 314}} />
                    <h2 className="title py-5 fw-bold text-white">
                      Healty<br/>Food
                    </h2>
                  </div>
                </div>
                <button  type="button" className="btn btn-primary btn-lg .25rem text-white"  onClick={()=> navigate("/menu/additem")} >add item</button>
                <div className="row">
                    <div className="col-md-12" style={{height: 100}}>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-2 ">
                  <div className="col">
                        <div>
                          <h2 className="title text-start py-5 fw-bold text-center text-white">
                            Burgers & Wraps
                          </h2>
                        </div>
                        <div className="container">
                          <div className="row row-cols-1 row-cols-xl-2 ">
                          {menuItems
                            .filter((item) => item.type === "Burgers & Wraps")
                            .map((item) => (
                              <MenuItemCards key={item.itemId} {...item} onDelete={handleDelete} />
                            ))}
                            </div>
                        </div>
                    </div>
                    <div className="col">
                      <div>
                        <h2 className="title text-start py-5 fw-bold text-center text-white">
                          Sushibowls
                        </h2>
                      </div>
                      <div className="container ">
                          <div className="row row-cols-1 row-cols-xl-2">
                        {menuItems.filter(item => item.type === 'Sushibowls').map((item) => (
                            <MenuItemCards key={item.itemId} {...item} onDelete={handleDelete} />
                        ))}
                        </div>
                        </div>
                    </div>
                  </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col-md-12" style={{height: 150}}>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                      <h2 className="title text-center py-5 fw-bold text-white">
                        To Add
                      </h2>
                    <div className="container ">
                          <div className="row row-cols-1 row-cols-md-2 g-4">
                      {menuItems.filter(item => item.type === 'To Add').map((item) => (
                          <MenuCard key={item.itemId} {...item} onDelete={handleDelete}/>
                      ))}
                      </div>
                      </div>
                  </div>
                <div className="col">
                      <h2 className="title text-center py-5 fw-bold text-white">
                        Drinks
                      </h2>
                    <div className="container ">
                          <div className="row row-cols-1 row-cols-md-2 g-4">
                      {menuItems.filter(item => item.type === 'Drinks').map((item) => (
                          <MenuCard key={item.itemId} {...item} onDelete={handleDelete}/>
                      ))}
                      </div>
                    </div>
                    <div className="col-md-3">
                    </div>
                  </div>
                </div>
                <div className="row">
                    <div className="col-md-12" style={{height: 150}}>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                  <div className="col">
                      <h2 className="title text-center py-5 fw-bold text-white">
                        Sauces
                      </h2>
                    <div className="container ">
                          <div className="row row-cols-1 row-cols-md-2 g-4">
                      {menuItems.filter(item => item.type === 'Sauces').map((item) => (
                          <MenuCard key={item.itemId} {...item} onDelete={handleDelete}/>
                      ))}
                      </div>
                    </div>
                </div>

                    <div className="col">
                      <h2 className="title text-center py-5 fw-bold text-white">
                          Sides
                      </h2>
                    <div className="container ">
                          <div className="row row-cols-1 row-cols-md-2 g-4">
                      {menuItems.filter(item => item.type === 'Sides').map((item) => (
                          <MenuCard key={item.itemId} {...item} onDelete={handleDelete}/>
                      ))}
                      </div>
                    </div>
                  </div>
                </div>
              <div className="row">
                    <div className="col-md-12" style={{height: 150}}>
                    </div>
                </div>
              </div>
            </div>
      </>
     );
}
 
