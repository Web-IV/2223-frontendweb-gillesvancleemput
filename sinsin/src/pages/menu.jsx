import Navigationbar from "../components/Navbar";
import { useState, useEffect, useCallback } from 'react'; 
import * as Api from '../api/menuItems'; 
import MenuItemCards from "../components/menuItemCardsBeschrijving";
import MenuCard from "../components/menuCard";
import { useNavigate } from 'react-router-dom';
import logo from "../images/logo_sinsin-schild-wit-1-.png";


export default function Menu(){
    const [menuItems, setMenuItems] = useState([]);
    let navigate = useNavigate();

    const refreshTransactions = useCallback(async () => {
      try {
        const data = await Api.getAllMenuItems();
        setMenuItems(data);
      } catch (error) {
        console.error(error);
      } 
    }, []);

    useEffect(() => {
      refreshTransactions();
    }, [refreshTransactions]);

    const handleDelete = useCallback(async (idToDelete) => {
        try {
          await Api.deleteByIdMenu(idToDelete);
          setMenuItems((menuItems) => menuItems.filter(({ id }) => id !== idToDelete));
        } catch (error) {
          console.error(error);
        }
      }, []);

    return ( 
      <>
            <div className="menu">
                <Navigationbar  />
                <div class="row">
                  <div class="col-md-6 text-end py-5">
                    <img alt="sin sin logo" src={logo} style={{ width:202 , height: 262}} />
                  </div>
                  <div class="col-md-6">
                    <h2 className="title text-start py-5 fw-bold text-white">
                      Healty<br/>Food
                    </h2>
                  </div>
                </div>
                <button  type="button" className="btn btn-danger  .25rem"  onClick={()=> navigate("/menu/additem")} >add item</button>
                <div className="row">
                    <div className="col-md-12" style={{height: 100}}>
                    </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-md-3">
                      </div>
                      <div class="col-md-9">
                        <h2 className="title text-start py-5 fw-bold text-white">
                          Burgers & Wraps
                        </h2>
                      </div>
                      <div class="col-md-1">
                      </div>
                    </div>
                    <div class="row ">
                      <div class="col-md-3">
                      </div>
                      <div class="col-md-9">
                        <div class="container ">
                          <div class="row">
                          {menuItems
                            .filter((item) => item.type === "Burgers & Wraps")
                            .map((item) => (
                              <MenuItemCards key={item.itemId} {...item} onDelete={handleDelete} />
                            ))}
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-md-12">
                        <h2 className="title text-start py-5 fw-bold text-white">
                          Sushibowls
                        </h2>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-9">
                      <div class="container ">
                          <div class="row">
                        {menuItems.filter(item => item.type === 'Sushibowls').map((item) => (
                            <MenuItemCards key={item.itemId} {...item} onDelete={handleDelete} />
                        ))}
                        </div>
                        </div>
                      </div>
                      <div class="col-md-3">
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                    <div className="col-md-12" style={{height: 150}}>
                    </div>
                </div>
                <div class="row">
                <div class="col-md-6">
                  <div class="row">
                    <div class="col-md-3">
                    </div>
                    <div class="col-md-9">
                      <h2 className="title text-start py-5 fw-bold text-white">
                        To Add
                      </h2>
                    </div>
                  </div>
                  <div class="row">
                  <div class="col-md-3">
                  </div>
                    <div class="col-md-9">
                    <div class="container ">
                          <div class="row">
                      {menuItems.filter(item => item.type === 'To Add').map((item) => (
                          <MenuCard key={item.itemId} {...item} onDelete={handleDelete}/>
                      ))}
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="row">
                    <div class="col-md-12">
                      <h2 className="title text-start py-5 fw-bold text-white">
                        Drinks
                      </h2>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-9">
                    <div class="container ">
                          <div class="row">
                      {menuItems.filter(item => item.type === 'Drinks').map((item) => (
                          <MenuCard key={item.itemId} {...item} onDelete={handleDelete}/>
                      ))}
                      </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                    </div>
                  </div>
                </div>
                <div className="row">
                    <div className="col-md-12" style={{height: 150}}>
                    </div>
                </div>
                <div class="row">
                <div class="col-md-6">
                  <div class="row">
                  <div class="col-md-3">
                    </div>
                    <div class="col-md-9">
                      <h2 className="title text-start py-5 fw-bold text-white">
                        Sauces
                      </h2>
                    </div>
                  </div>
                  <div class="row">
                  <div class="col-md-3">
                  </div>
                    <div class="col-md-9">
                    <div class="container ">
                          <div class="row">
                      {menuItems.filter(item => item.type === 'Sauces').map((item) => (
                          <MenuCard key={item.itemId} {...item} onDelete={handleDelete}/>
                      ))}
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="row">
                    <div class="col-md-12">
                      <h2 className="title text-start py-5 fw-bold text-white">
                          Sides
                      </h2>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-9">
                    <div class="container ">
                          <div class="row">
                      {menuItems.filter(item => item.type === 'Sides').map((item) => (
                          <MenuCard key={item.itemId} {...item} onDelete={handleDelete}/>
                      ))}
                      </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                    </div>
                  </div>
                </div>
                </div>
              </div>
              <div className="row">
                    <div className="col-md-12" style={{height: 150}}>
                    </div>
                </div>
            </div>
      </>
     );
}
 
