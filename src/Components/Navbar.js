import { Link } from "react-router-dom";
import "../Components_Style/Navbar.css";
import logo from "../images/logoPh.png";

function Navbar() {
  window.onscroll = function () {
    if (window.scrollY >= 400) {
      document.getElementById("navTrick").classList.add("sticky-nav");
    } else {
      document.getElementById("navTrick").classList.remove("sticky-nav");
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary Navbar-comp"
      id="navTrick"
    >
      <div className="container-fluid">
        <Link className="navbar-brand logo" to="/">
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>
        <button
          className="navbar-toggler burger-icon"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link  bef-link active"
                aria-current="page"
                to="/"
              >
                الرئيسية
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link bef-link " href="/#our-services">
                خدماتنا
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link bef-link " href="/#our-works">
                أعمالنا
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link bef-link " to="/aboutUs">
                معلومات عنا
              </Link>
            </li>
          </ul>
        </div>
        <Link className="contact-us btn btn-primary" to={"/contactUs"}>
          تواصل معنا
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
