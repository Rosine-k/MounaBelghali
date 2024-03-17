import React, { useState } from 'react';
import Header from "../../layouts/Header/index";
import Footer from '../../layouts/Footer';
import Avatar from '../../assets/photo-contact.jpg';
import Tel from '../../assets/appel-telephonique.png';

function Contact() {
    const [formData, setFormData] = useState({
        nom_prenom: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async e => {
        e.preventDefault();

        // Validation côté client
        const { nom_prenom, email, message } = formData;

        if (!nom_prenom.trim()) {
            return setErrors({ nom_prenom: 'Veuillez entrer votre nom et prénom.' });
        } else if (!isValidName(nom_prenom)) {
            return setErrors({ nom_prenom: 'Caractères spéciaux non autorisés.' });
        }

        if (!email.trim()) {
            return setErrors({ email: 'Veuillez entrer votre adresse e-mail.' });
        } else if (!isValidEmail(email)) {
            return setErrors({ email: 'Veuillez entrer une adresse e-mail valide.' });
        }

        if (!message.trim()) {
            return setErrors({ message: 'Veuillez entrer votre message.' });
        } else if (!isValidMessage(message)) {
            return setErrors({ message: 'Caractères spéciaux non autorisés.' });
        }

        // Envoyer le formulaire au backend
        try {
            const response = await fetch('/submit_form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Erreur lors de la soumission du formulaire:', error);
        }
    };

    const isValidEmail = email => {
        // Expression régulière simple pour vérifier l'adresse e-mail
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const isValidName = name => {
        // Expression régulière pour autoriser uniquement les lettres et les espaces
        const regex = /^[A-Za-z\s]+$/;
        return regex.test(name);
    };

    const isValidMessage = message => {
        // Expression régulière pour autoriser les lettres, les chiffres et certains caractères spéciaux
        const regex = /^[A-Za-z0-9\s.,!?;:()'\-\n]+$/;
        return regex.test(message);
    };

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
                            <form onSubmit={handleSubmit}>

                                <div className='contact__formA'>

                                    <div>
                                        <label htmlFor="nom_prenom">Nom et Prénom :</label><br />
                                        <input type="text" id="nom_prenom" name="nom_prenom" value={formData.nom_prenom} onChange={handleChange} required />
                                        {errors.nom_prenom && <span style={{ color: 'red' }}>{errors.nom_prenom}</span>}
                                    </div>

                                    <div>
                                        <label htmlFor="email">Email :</label><br />
                                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required /><br />
                                        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                                    </div>
                                </div>
                                

                                <div>
                                    <label htmlFor="message">Message :</label><br />
                                    <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea><br />
                                    {errors.message && <span style={{ color: 'red' }}>{errors.message}</span>}
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
