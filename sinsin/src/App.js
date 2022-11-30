import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/home';
import Menu from './pages/Menu';
import Login from './pages/login';
import AddmenuItem from './pages/AddMenuItem';
import Bestelling from './pages/Bestelling';
import{ Routes, Route} from 'react-router-dom';
import Navigationbar from './components/Navbar';
import Footer from './components/Footer';






function App() {
  return (
    <div className="App">
      <div>
        <Navigationbar />
      </div>
      <div className='mt-10'>
      <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/menu/additem" element={<AddmenuItem />}/>
            <Route path="/menu/edititem/:id" element={<AddmenuItem />}/>
            <Route path="/menu" element={<Menu />}/>
            <Route path="/bestelling" element={<Bestelling />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="*" element={<h1>404</h1>}/>
      </Routes>
      </div>
      <div>	
        <Footer />
      </div>
    </div>
  );
}

export default App;
