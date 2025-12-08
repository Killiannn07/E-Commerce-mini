import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import './navbar.css';
export default function Navbar() {
  const navigate = useNavigate();
  
  return (
    <nav className="navbar">
      <div className="logo">AnjayStore</div>

      <input
        type="text"
        placeholder="Search product..."
        className="search"
      />

      <div className="nav-icons">
        <span onClick={() => navigate("/Login")}>Login</span>
        <span onClick={() => navigate("/Cart")}>Cart <FaShoppingCart/></span>
      </div>
    </nav>
  );
}
