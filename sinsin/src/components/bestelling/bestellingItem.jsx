import "bootstrap/dist/css/bootstrap.min.css";
import { memo } from "react";
import { useCallback, useState } from "react";

export default memo(function BestellingItem({
  itemId,
  naam,
  prijs,
  beschrijving,
  onDelete,
  prijsbereken,
}) {
  const handleDelete = useCallback(
    (event) => {
      event.preventDefault();
      onDelete(itemId);
    },
    [itemId, onDelete]
  );

  let [aantal, setAantal] = useState(0);
  const data = JSON.parse(localStorage.getItem("bestelling"));
  data.filter((item) => {
    if (item.itemId === itemId) {
      aantal = item.aantal;
    }
    return aantal;
  });
  const plusAantal = () => {
    const data = JSON.parse(localStorage.getItem("bestelling"));
    aantal = aantal + 1;
    data.filter((item) => {
      if (item.itemId === itemId) {
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
    if (aantal > 1) {
      aantal = aantal - 1;
      data.filter((item) => {
        if (item.itemId === itemId) {
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
    <div className="card my-2">
      <div className="card-body">
        <div className="container">
          <div className="row row-cols-1 row-cols-xl ">
            <div className="col-sm-6 col-md-6 col-lg-3">
              <h5 className="card-title ">{naam}</h5>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <h5 className="card-title ">€{prijs}</h5>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="container">
                <div className="row row-cols-1 row-cols-xl-3 row-cols-sm-13">
                  <div className="col-sm-4 col-md-4 col-lg-4">
                    <button
                      type="button"
                      className="btn btn-dark  .25rem"
                      onClick={plusAantal}
                    >
                      +
                    </button>
                  </div>
                  <div className="col-sm-4 col-md-4 col-lg-4">
                    <h5 className="card-title ">{aantal}</h5>
                  </div>
                  <div className="col-sm-4 col-md-4 col-lg-4">
                    <button
                      type="button"
                      className="btn btn-dark  .25rem"
                      onClick={minAantal}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <button className="btn btn-danger btn-sm" onClick={handleDelete}>
                Verwijder
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
