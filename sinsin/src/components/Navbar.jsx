import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import {useEffect, useRef,useState } from 'react';
import AuthButton from './Autenticatie/AuthenticationButton';






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
        <Navbar expand="md" className='navbarbg .bg-transparent py-3  fixed-top' style={{ transition: '1s ease',backgroundColor: navBackground ? 'red' : 'transparent'}} >
          <Navbar.Brand className='ms-5 me-auto' >
            <img as={Link}  to="/"  src={"images/logo_navbar.png"} alt="..." height="120" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav " classname='ms-4' />
          <Navbar.Collapse className='Collapse' id="basic-navbar-nav .right">
            <Nav className='py-auto ms-auto me-5'>
              <Nav.Link className='navbarText text-white' as={Link}  to="/">home</Nav.Link>
              <Nav.Link className='navbarText text-white' as={Link} to="/menu">menu</Nav.Link>
              <Nav.Link className='navbarText text-white' as={Link} to="/bestelling">bestelling</Nav.Link>
              <Nav.Link className='navbarText text-white'><AuthButton /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar> 
    );
}

