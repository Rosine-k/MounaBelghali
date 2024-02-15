import React, { useEffect }  from 'react';
import initSmoothScroll from '../../components/Haut/index';
import Bandeau from "../../assets/bandeau.png";


function Footer() {

    useEffect(() => {
        initSmoothScroll();
    }, []);
    const footerStyle = {
        background:  `url(${Bandeau})`,  
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: '20px', 
        
      };
    return (
        <footer className="footer" style={footerStyle}>
   
            <div className="footer__bloc" >
                <div className="footer__blocbis">
                    <div className="footer__text">
                        <h4 className="footer__titre">Mouna Belghali</h4>
                        <p>Comédienne</p>
                    </div>
        
                    <div className="footer__contact">
                        <h4 className="footer__titre">Contact</h4>
                        <p>mail : contact@mounabelghali.fr</p>
                        <p>+33 06 52 56 20 23</p>
                    </div>
                </div>
                
                <div className="footer__copyright">Copyright 2024 Mouna Belghali | All Rights Reserved</div>

            </div>

        </footer>
      
    );
}
  
export default Footer;