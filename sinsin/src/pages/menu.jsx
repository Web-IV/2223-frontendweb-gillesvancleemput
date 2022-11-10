import Navigationbar from "../components/Navbar";
import { useState, useEffect, useCallback } from 'react'; 
import * as Api from '../api/menuItems'; 
import MenuItemCards from "../components/menuItemCardsBeschrijving";
import MenuCard from "../components/menuCard";
import { useNavigate } from 'react-router-dom';



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
                <button  type="button" className="btn btn-danger  .25rem"   onClick={()=> navigate("/menu/additem")} >add item</button>
                <h2>Burgers & Wraps</h2>
                {menuItems.filter(item => item.type === 'Burgers & Wraps').map((item) => (
                    <MenuItemCards key={item.itemId} {...item} onDelete={handleDelete} />
                ))}
                <h2>Sushibowls</h2>
                {menuItems.filter(item => item.type === 'Sushibowls').map((item) => (
                    <MenuItemCards key={item.itemId} {...item} onDelete={handleDelete} />
                ))}
                <h2>To Add</h2>
                {menuItems.filter(item => item.type === 'To Add').map((item) => (
                    <MenuCard key={item.itemId} {...item} onDelete={handleDelete}/>
                ))}
                <h2>Drinks</h2>
                {menuItems.filter(item => item.type === 'Drinks').map((item) => (
                    <MenuCard key={item.itemId} {...item} onDelete={handleDelete}/>
                ))}

            </div>
      </>
     );
}
 
