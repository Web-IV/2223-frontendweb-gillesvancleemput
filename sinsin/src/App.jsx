import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Home from '../src/components/home';
import Menu from '../src/components/menu/Menu';
import MenuForm from '../src/components/menu/menuForm';
import Account from '../src/components/account/account';
import Bestelling from '../src/components/bestelling/Bestelling';
import{ Routes, Route} from 'react-router-dom';
import Navigationbar from './components/Navbar';
import Footer from './components/Footer';
import RequireAuth from './components/Autenticatie/RequireAuth';
import AuthLanding from './components/Autenticatie/AuthLanding';







function App() {
  return (
    <div className="App">
      <div className='nav'>
        <Navigationbar />
      </div>
      <div className='mt-10'>
      <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/components/menu/menuForm" element={<RequireAuth><MenuForm /></RequireAuth>}/>
            <Route path="/menu/edititem/:id" element={<RequireAuth><MenuForm /></RequireAuth>}/>
            <Route path="/menu" element={<Menu />}/>
            <Route path="/bestelling" element={<Bestelling />}/>
            <Route path="/login" element={<AuthLanding />}/>
            <Route path="/account" element={<RequireAuth><Account /></RequireAuth>}/>
            <Route path="*" element={<h1>404</h1>}/>
      </Routes>
      </div>
      <div className='footer'>	
        <Footer />
      </div>
    </div>
  );
}

export default App;
