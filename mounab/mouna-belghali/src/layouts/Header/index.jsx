import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoFacebook from "../../assets/facebookB.png";
import logoInstagram from "../../assets/instagram.png";


function Header() {

  const location = useLocation();
  const currentPage = location.pathname;

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  

  return (
    <header className={`navigation ${isScrolled ? "sticky" : ""}`}>

      <div className="navigation">
        
        <nav className="navigation__liens">

          <div className="navigation__bloca">
            <Link to="/" className="navigation__nom"> Mouna Belghali </Link>
          </div>

          <div className="navigation__blocb">
            <Link to="/" className={currentPage === "/" ? "active" : ""}>  Accueil  </Link>

            <Link to="/photos"  className={currentPage === "/photos" ? "active" : ""}> Photos  </Link>

            <Link to="/videos"  className={currentPage === "/videos" ? "active" : ""}>  Videos  </Link>

            <Link to="/parcours"  className={currentPage === "/parcours" ? "active" : ""}> Parcours </Link>

            <Link to="/actualites"  className={currentPage === "/actualites" ? "active" : ""}>  Actus  </Link>

            <Link to="/contact"  className={currentPage === "/contact" ? "active" : ""}>  Contact  </Link>
          </div>

          <div className="navigation__blocc">
            <Link to="/"> <img className="navigation__logo" src={logoFacebook} alt="logo facebook" /></Link>

            <Link to="/"> <img className="navigation__logo" src={logoInstagram} alt="logo instagram" /></Link>
          </div>

        </nav>

      </div>
      
    </header>
  );
}

export default Header;