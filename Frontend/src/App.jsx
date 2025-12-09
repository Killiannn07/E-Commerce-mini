import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Cart from './pages/cart'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register';
import "./styles/App.css";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/Register' element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
