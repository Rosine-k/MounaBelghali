import React  from 'react';
import Header from "../../layouts/Header/index";
import Footer from '../../layouts/Footer';
import Banner from '../../assets/photoAccueil.jpg';
import Photo1 from '../../assets/tof7.jpg';
import Photo2 from '../../assets/tof10.jpg';
import Photo3 from '../../assets/tof9.jpg';
import Video1 from '../../assets/videoBandeDemo.png';
import { Link } from "react-router-dom";

function Accueil () {
    return (
        <div>
            <Header />
            <main>
                <div className='home'>

                    <div className='home__blocBanner'>
                        <img className="home__banner" src={Banner} alt="banner" />
                    </div>

                    <div className='home__blocphotos'>
                        <h1 className='home__h1'>Photos</h1>

                        <div className='home__photos'>
                            <img className="home__photo1" src={Photo1} alt="boook" />
                            <img className="home__photo2" src={Photo2} alt="book" />
                            <img className="home__photo3" src={Photo3} alt="book" />

                        </div>

                        <Link to='/photos' ><button className='home__button'><span>Toutes les photos</span></button></Link>
                        

                    </div>

                    <div className='home__bandedemo'>
                        <h2 className='home__h2'>Bande démo</h2>
                        <img className="home__video1" src={Video1} alt="bandeDemo" />

                    </div>


                </div>

            </main>
            <Footer />
        </div>

    )
}

export default Accueil;