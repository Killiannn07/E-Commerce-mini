export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">AnjayStore</div>

      <input
        type="text"
        placeholder="Search product..."
        className="search"
      />

      <div className="nav-icons">
        <span>Login</span>
        <span>Cart 🛒</span>
      </div>
    </nav>
  );
}
