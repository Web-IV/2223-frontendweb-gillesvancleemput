import { useState, useEffect, useCallback } from "react";
import useMenuItems from "../../api/menuItems";
import { useNavigate } from "react-router-dom";
import BestellingItem from "./bestellingItem";
import useBestelling from "../../api/bestelling";
import BestellingEmpty from "./bestellingEmpty";
import BestellingModal from "./BestellingModal";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Bestelling() {
  const [bestellingItems, setbestellingItems] = useState([]);
  const [totprijs, setTotprijs] = useState(0);
  const { getAllMenuItems } = useMenuItems();
  const { createBestelling } = useBestelling();

  const prijs = useCallback(async () => {
    const items = JSON.parse(localStorage.getItem("bestelling"));
    if (items) {
      setTotprijs(items.reduce((a, b) => a + b.prijs * b.aantal, 0));
    } else {
      setTotprijs(0);
    }
  }, []);

  // let navigate = useNavigate();
  const refreshItems = useCallback(async () => {
    try {
      const data = await getAllMenuItems();
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
  }, [prijs, getAllMenuItems]);

  useEffect(() => {
    refreshItems();
  }, [refreshItems]);

  const handleDelete = useCallback(
    async (idToDelete) => {
      try {
        const items = JSON.parse(localStorage.getItem("bestelling"));
        const Ids = [];
        items.map((item) => {
          return Ids.push(item[0]);
        });
        const index = items.findIndex((item) => item.itemId === idToDelete);
        items.splice(index, 1);
        localStorage.setItem("bestelling", JSON.stringify(items));
        refreshItems();
        prijs();
      } catch (error) {
        console.error(error);
      }
    },
    [refreshItems, prijs]
  );

  if (bestellingItems.length === 0) {
    return <BestellingEmpty />;
  }
  return (
    <>
      <div className="row">
        <div className="col-md-1" style={{ height: 150 }}></div>
      </div>
      <div className="container">
        <div className="row  d-flex justify-content-center">
          <div className="col-sm-8 col-md-10 col-lg-9">
            <div className="card text-center">
              <div className="display-6 card-header text-center px-5">
                Mijn bestelling
              </div>
              <div className="card-body ">
                {bestellingItems.map((item) => (
                  <BestellingItem
                    key={item.itemId}
                    {...item}
                    onDelete={handleDelete}
                    prijsbereken={prijs}
                  />
                ))}
              </div>
              <div className="text card-footer text-end px-5">
                <h3 className="pt-3">totaal prijs: ${totprijs}</h3>
                <BestellingModal prijs={totprijs} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12" style={{ height: 350 }}></div>
      </div>
    </>
  );
}
