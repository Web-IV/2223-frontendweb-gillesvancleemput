import image from "../images/SinSin_elementen5.png";
import Navigationbar from "../components/Navbar";
const Home = () => {
    return ( 
      <>
            <div className="home" style={{backgroundImage:`url(${image}`} }>
                <Navigationbar/>
                <h2>Homepage</h2>
                <button >Click me</button>              
            </div>
      </>
     );
}
 
export default Home;