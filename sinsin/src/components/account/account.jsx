import "../../styles/home.css";
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import useUser from '../../api/User';
import {useCallback , useEffect, useState} from 'react'; 

export default function Account() {
    const [user, setUser] = useState();
    const {getUserById} = useUser();


    const getUser = useCallback(async () => {
        try {
            const user = await getUserById("8e99e823-7270-475a-beaf-997afcabf5c4");
            setUser(user);
        } catch (error) {
            console.error(error);
        }
    }, [getUserById]);
    console.log(user , "user");


    useEffect(() => {
        getUser();
    }, [getUser]);

        
    return ( 
      <>
      <div className="row">
        <div className="col-md-12" style={{height: 150}}>
        </div>
    </div>
      <div className="row  d-flex flex-wrap justify-content-center">
            <div className='col-md-7'>
                <div className="card text-center">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item">
                            <Nav.Link className='text-black active' as={Link}  to="/">Account</Nav.Link>
                        </li>
                        <li className="nav-item">
                            <Nav.Link className='text-black' as={Link}  to="/">Bestellingen</Nav.Link>
                        </li>
                        </ul>
                    </div>
                        <div className="card-body">
                            <h5 className="card-title">Account</h5>
                            <p className="card-text">Naam: {user?.naam}</p>
                            <p className="card-text">Email: {user?.email}</p>
                            <p className="card-text">Postcode: {user?.postcode}</p>
                            <p className="card-text">Gemeente: {user?.gemeente}</p>
                            <p className="card-text">Straat: {user?.straat}</p>
                            <p className="card-text">Huisnummer: {user?.huisnummer}</p>
                        </div>
                    </div>
            </div>
        </div>
      </>
     );
}
 