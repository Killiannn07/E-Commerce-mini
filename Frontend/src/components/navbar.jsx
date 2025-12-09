import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./navbar.css";
export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-[#112D4E] shadow-md">
      <div className="item-center text-2xl font-Helvetica font-bold text-white">
        AnjayStore
      </div>
      <div className="hidden md:flex w-1/2 items-center">
        <input
          type="text"
          placeholder="Search product..."
          className="w-full px-4 py-2 border border-white rounded-lg mx-10 text-white"
        />
      </div>

      <div className="flex gap-6 text-lg font-medium cursor-pointer items-center">
        <span
          className="flex items-center font-bold text-white hover:scale-105"
          onClick={() => navigate("/login")}
        >
          Login
        </span>
        <span
          className="flex items-center  font-bold gap-1 text-white hover:scale-105"
          onClick={() => navigate("/Cart")}
        >
          Cart
          <FaShoppingCart />
        </span>
      </div>
    </nav>
  );
}
