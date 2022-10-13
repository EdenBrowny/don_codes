import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="styles__aboutUs">
        <a href="#about us">About Us</a>
      </div>
      <div className="styles__services">
        <a href="#services">Services</a>
      </div>
      <div className="styles__brands">
        <a href="#brands">Brands</a>
      </div>
      <div className="styles__reference">
        <a href="#reference">Reference</a>
      </div>
    </div>
  );
}
