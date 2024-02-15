import React from 'react';
import Header from "../../layouts/Header/index";
import Footer from '../../layouts/Footer';
import Video1 from '../../assets/videoBandeDemo.png';
import Video2 from '../../assets/video2.png';
import Video3 from '../../assets/video3.png';

function Videos() {
   
    return (
        <div>
            <Header />
            <main>
                <div className='videos'>
                    <h1 className='videos__h1'>Vidéos</h1>

                    <div className='videos__bloc'>

                        <div className='videos__bandedemo'>

                            <h2 className='videos__h2'>Bande démo</h2>
                            <div className="video-thumbnail">
                                <img className="videos__un" src={Video1} alt="book" />
                            </div>
                            

                        </div>

                        <div className='videos__extraits'>

                            <h2 className='videos__h2'>Extraits</h2>
                            <div className="video-thumbnail">
                                <img className="videos__un" src={Video2} alt="book" />
                            </div>

                            <div className="video-thumbnail">
                                <img className="videos__un" src={Video3} alt="book" />
                            </div>
                            
                            

                        </div>


                    </div>
                                       
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Videos;
