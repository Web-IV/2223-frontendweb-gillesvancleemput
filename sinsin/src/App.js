import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/home';
import Menu from './pages/menu';
import Login from './pages/login';
import{ Routes, Route} from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/menu" element={<Menu />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="*" element={<h1>404</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
