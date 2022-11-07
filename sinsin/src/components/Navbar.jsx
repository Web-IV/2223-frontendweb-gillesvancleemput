import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";



const navigationbar = () => {
    return ( 
        <Navbar className='navbar navbar-expand-lg  .bg-transparent ' >
        <Container>
          <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
          <Nav >
            <Nav.Link as={Link}  to="/">home</Nav.Link>
            <Nav.Link as={Link} to="/menu">menu</Nav.Link>
            <Nav.Link as={Link} to="/menu">bestelling</Nav.Link>
            <Nav.Link as={Link} to="/login" >Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar> 
      
    );
}
 
export default navigationbar;