import React from 'react';
import Header from "../../layouts/Header/index";
import Footer from '../../layouts/Footer';
import { Link } from "react-router-dom";

function Erreur () {

    return (
        <div>
            <Header />
            <main>

                <div className='erreur'>
                    
                    <div className='erreur__bloc'>
                        <h1 className='erreur__h1'>Une erreur s'est produite</h1>
                        <Link to='/'><h2 className='erreur__h2'>Retourner à l'accueil</h2></Link>
                    </div>
                    
                    
                </div>

            </main>
            <Footer />

        </div>
    )
}

export default Erreur;