import Navigationbar from "../components/Navbar";
import { useState, useEffect, } from 'react'; 
import * as transactionsApi from '../api/transactions'; 
import MenuItemCards from "../components/menuItemCards";

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]); 

    useEffect(() => {
        const fetchTransactions = async () => {
            const data = await transactionsApi.getAllMenuItems();
            setMenuItems(data);
        };
        fetchTransactions();
    }, []);


    return ( 
      <>
            <div className="menu">
                <Navigationbar/>
                <h2>users</h2>
                {menuItems.map((item) => (
                    <MenuItemCards key={item.itemId} naam={item.naam} />
                ))}

            </div>
      </>
     );
}
 
export default Menu;