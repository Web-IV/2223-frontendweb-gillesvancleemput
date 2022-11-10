import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/home';
import Menu from './pages/Menu';
import Login from './pages/login';
import AddmenuItem from './pages/AddMenuItem';
import{ Routes, Route} from 'react-router-dom';
import Navigationbar from './components/Navbar';





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
            <Route path="/menu/edititem" element={<Menu />}/>
            <Route path="/menu" element={<Menu />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="*" element={<h1>404</h1>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
