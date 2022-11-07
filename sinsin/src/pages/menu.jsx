import Navigationbar from "../components/Navbar";
import { useState, useEffect, useCallback } from 'react'; 
import * as Api from '../api/transactions'; 
import MenuItemCards from "../components/menuItemCardsBeschrijving";
import image from "../images/SinSin_elementen5.png";
import MenuCard from "../components/menuCard";


const Menu = () => {
    const [menuItems, setMenuItems] = useState([]); 

    useEffect(() => {
        const fetchTransactions = async () => {
            const data = await Api.getAllMenuItems();
            setMenuItems(data);
            console.log(data);
        };
        fetchTransactions();
    }, [menuItems]);

    const handleDelete = useCallback(async (idToDelete) => {
        try {
          await Api.deleteByIdMenu(idToDelete);
          setMenuItems((menuItems) => menuItems.filter(({ id }) => id !== idToDelete)); // 👈 2
        } catch (error) {
          console.error(error);
        }
      }, []);


    return ( 
      <>
            <div className="menu" style={{backgroundImage:`url(${image}`} } >
                <Navigationbar  />
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

            </div>
      </>
     );
}
 
export default Menu;