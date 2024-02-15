import React from 'react';
import Header from "../../layouts/Header/index";
import Footer from '../../layouts/Footer';
import Avatar from '../../assets/photo-contact.jpg';
import Tel from '../../assets/appel-telephonique.png';

function Contact() {
   

    return (
        <div>
            <Header />
            <main>
                <div className='contact'>
                    <h1 className='contact__h1'>Contact</h1>

                    <div className='contact__bloc'>

                        <div className='contact__blocUn'>
                           
                           <div className='contact__blocUnA'>
                                <img className="contact__img" src={Avatar} alt="vig contact" />  
                           </div>
                            
                            <div className='contact__blocUnB'>
                                <h2 className='contact__h2'>Mouna Belghali</h2>

                                <div className='contact__blocTel'>
                                    <img className="contact__imgTel" src={Tel} alt="vig tel" />
                                    <h3 className='contact__h3'>06 05 01 06 01</h3>
                                </div>

                                <div className='contact__blocEmail'>
                                    <img className="contact__imgEmail" src={Tel} alt="vig email" />
                                    <h3 className='contact__h3'>contact@mounabelghali.fr</h3>
                                </div>
                                
                                
                            </div>
                            

                        </div>

                        <div className='contact__blocDeux'>
                            <h4 className='contact__h4'>Vous pouvez également me contacter par le formulaire suivant.</h4>
                            <form action="/submit_form" method="POST">

                                <div className='contact__formA'>

                                    <div>
                                        <label htmlFor="nom_prenom">Nom et Prénom :</label><br />
                                        <input type="text" id="nom_prenom" name="nom_prenom" required />
                                    </div>

                                    <div>
                                        <label htmlFor="email">Email :</label><br />
                                        <input type="email" id="email" name="email" required /><br />
                                    </div>
                                </div>
                                

                                <div>
                                    <label htmlFor="message">Message :</label><br />
                                    <textarea id="message" name="message" rows="4" required></textarea><br />
                                </div>

                                <div>
                                    <button className='contact__btn' type="submit">Envoyer</button>
                                </div>
                            </form>


                        </div>

                    </div>
                                       
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Contact;
