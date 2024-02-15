import React from 'react';
import Header from "../../layouts/Header/index";
import Footer from '../../layouts/Footer';
import Actu1 from '../../assets/actualites2.jpg';
import Actu2 from '../../assets/actualites1.jpg';
import Actu3 from '../../assets/actualites.jpg';
import Actu4 from '../../assets/actualites4.jpg';

function Actus() {


    return (
        <div>
            <Header />
            <main>
                <div className='actus'>
                    <h1 className='actus__h1'>Actualités</h1>

                    <div className='actus__bloc'>

                        <div className='actus__vignette'>
                           
                            <img className="actus__img" src={Actu1} alt="actus" />  
                            <h2 className='actus__h2'>Pièce de théâtre</h2>
                            <p>Lorem ipsum dolor sit amet Lorem ipsum <br /> dolor sit ametLorem ipsum dolor sit <br /> ametLorem ipsum dolor sit amet</p>

                        </div>

                        <div className='actus__vignette'>

                            <img className="actus__img" src={Actu2} alt="actus" />  
                            <h2 className='actus__h2'>Pièce de théâtre</h2>
                            <p>Lorem ipsum dolor sit amet Lorem ipsum <br /> dolor sit ametLorem ipsum dolor sit <br /> ametLorem ipsum dolor sit amet</p>

                        </div>

                        <div className='actus__vignette'>
                           
                            <img className="actus__img" src={Actu3} alt="actus" /> 
                            <h2 className='actus__h2'>Pièce de théâtre</h2>
                            <p>Lorem ipsum dolor sit amet Lorem ipsum <br /> dolor sit ametLorem ipsum dolor sit <br /> ametLorem ipsum dolor sit amet</p>

                        </div>

                        <div className='actus__vignette'>                           
                           
                            <img className="actus__img" src={Actu4} alt="actus" />   
                            <h2 className='actus__h2'>Pièce de théâtre</h2>
                            <p className='actus__p'>Lorem ipsum dolor sit amet Lorem ipsum <br /> dolor sit ametLorem ipsum dolor sit <br /> ametLorem ipsum dolor sit amet</p>

                        </div>
                      


                    </div>
                                       
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Actus;
