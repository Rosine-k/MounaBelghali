import React from 'react';
import Header from "../../layouts/Header/index";
import Footer from '../../layouts/Footer';
import CV from '../../assets/nbtest.jpg';


function Parcours() {
   
 

    return (
        <div>
            <Header />
            <main>
                <div className='parcours'>
                    <h1 className='parcours__h1'>Parcours</h1>

                    <div className='parcours__bloc'>

                        <div className='parcours__image'>                            
                            
                            <img className="parcours__img" src={CV} alt="book" />                            
                                                       
                        </div>


                        <div className='parcours__text'>

                            <h2 className='parcours__h2'>Théâtre</h2>
                            <p className='parcours__cv'>
                                <br></br>
                                 <strong>2023</strong>  <br /> LA MAISON JAUNE de Catherine Frot <br></br><br />

                                SARAH de Jacques Prévert <br></br> <br />

                                BONJOUR de Sylvie Testaud <br></br>
                                <br></br><br />

                                <strong>2022</strong> <br /> AUREVOIR de Lara Fabian<br></br><br />

                                SI JAMAIS de Laurent Laret <br></br><br />

                                C'EST DIMANCHE de Stéphane Lion <br></br>
                                <br></br><br />

                                <strong>2021</strong> <br /> VENDREDI de Thierry Henry<br></br><br />

                                HUIT CENT de Claire Vert <br></br><br />

                                SEPT CENT de Claire Vert <br></br>
                                <br></br><br />

                                <strong>2020</strong> <br /> ADIOS AMIGOS de Gérard Jugnot<br></br><br />

                                UNE SOURIS VERTE de Maitre Gims<br></br><br />

                                SALUT de Julien John<br></br>

                            </p>
                            

                        </div>

                        

                    </div>
                                       
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Parcours;
