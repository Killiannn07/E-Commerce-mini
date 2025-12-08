import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Cart from './pages/cart'
import Login from './pages/Login'
import "./styles/App.css";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
