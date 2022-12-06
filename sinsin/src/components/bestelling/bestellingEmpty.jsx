import {useNavigate} from 'react-router-dom';
import {useCallback} from 'react'; 


export default function BestellingEmpty(){
    const Navigate = useNavigate();

    const navigate  = useCallback(() => {
        Navigate('/menu');
    }, [Navigate]); 

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