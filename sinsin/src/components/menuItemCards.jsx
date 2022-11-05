import 'bootstrap/dist/css/bootstrap.min.css'


function MenuItemCards({naam}) {

    return ( 
        <div className="card text-bg-light mb-3 container-fluid col-lg-3 col-md-9  "  >
        <div className="card-header">headers</div>
        <div className="card-body">
            <h5 className="card-title">{naam}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
      
    );
}
 
export default MenuItemCards;