import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import {useEffect, useRef,useState } from 'react';
import navlogo from '../images/logo_navbar.png';





export default function Navigationbar(){

  const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 50
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }, [])
  
    return ( 
        <Navbar className='navbar fs-3 navbar-expand-md  .bg-transparent py-3  fixed-top' style={{ transition: '1s ease',backgroundColor: navBackground ? 'red' : 'transparent'}} >
        <Container>
          <div className="navbar-brand">
            <img as={Link}  to="/"  src={navlogo} alt="..." height="120" />
          </div>
          <Nav >
            <Nav.Link className='text-white' as={Link}  to="/">home</Nav.Link>
            <Nav.Link className='text-white' as={Link} to="/menu">menu</Nav.Link>
            <Nav.Link className='text-white' as={Link} to="/bestelling">bestelling</Nav.Link>
            <Nav.Link className='text-white' as={Link} to="/login" >login</Nav.Link>
          </Nav>
        </Container>
      </Navbar> 
    );
}

