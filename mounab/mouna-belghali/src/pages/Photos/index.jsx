// import React from 'react';
// import Header from "../../layouts/Header/index";
// import Footer from '../../layouts/Footer';
// import Book1 from '../../assets/tof6.jpg';
// import Book2 from '../../assets/tof2.jpg';
// import Book3 from '../../assets/tof7.jpg';
// import Book4 from '../../assets/tof5.jpg';
// import Book5 from '../../assets/tof8.jpg';
// import Book6 from '../../assets/tof10.jpg';
// import Book7 from '../../assets/tof3.jpg';
// import Book8 from '../../assets/tof9.jpg';
// import Book9 from '../../assets/tof1.jpg';

// function Photos() {
   
//     return (
//         <div>
//             <Header />
//             <main>
//                 <div className='photos'>
//                     <h1 className='photos__h1'>Photos</h1>

//                     <div className='photos__bloc'>
//                         <img className="photos__book" src={Book1} alt="book" />
//                         <img className="photos__book" src={Book2} alt="book" />
//                         <img className="photos__book" src={Book3} alt="book" />
//                         <img className="photos__book" src={Book4} alt="book" />
//                         <img className="photos__book" src={Book5} alt="book" />
//                         <img className="photos__book" src={Book6} alt="book" />
//                         <img className="photos__book" src={Book7} alt="book" />
//                         <img className="photos__book" src={Book8} alt="book" />
//                         <img className="photos__book" src={Book9} alt="book" />

//                     </div>
                    
//                 </div>
//             </main>
//             <Footer />
//         </div>
//     );
// }

// export default Photos;

// import React from 'react';
// import Header from "../../layouts/Header/index";
// import Footer from '../../layouts/Footer';
// import ImageGallery from 'react-image-gallery';
// import 'react-image-gallery/styles/css/image-gallery.css';
// import Book1 from '../../assets/tof6.jpg';
// import Book2 from '../../assets/tof2.jpg';
// import Book3 from '../../assets/tof7.jpg';
// import Book4 from '../../assets/tof5.jpg';
// import Book5 from '../../assets/tof8.jpg';
// import Book6 from '../../assets/tof10.jpg';
// import Book7 from '../../assets/tof3.jpg';
// import Book8 from '../../assets/tof9.jpg';
// import Book9 from '../../assets/tof1.jpg';

// function Photos() {
//     const images = [
//         {
//             original: Book1,
//             thumbnail: Book1,
//         },
//         {
//             original: Book2,
//             thumbnail: Book2,
//         },
//         {
//             original: Book3,
//             thumbnail: Book3,
//         },
//         {
//             original: Book4,
//             thumbnail: Book4,
//         },
//         {
//             original: Book5,
//             thumbnail: Book5,
//         },
//         {
//             original: Book6,
//             thumbnail: Book6,
//         },
//         {
//             original: Book7,
//             thumbnail: Book7,
//         },
//         {
//             original: Book8,
//             thumbnail: Book8,
//         },
//         {
//             original: Book9,
//             thumbnail: Book9,
//         },
//     ];

//     return (
//         <div>
//             <Header />
//             <main>
//                 <div className='photos'>
//                     <h1 className='photos__h1'>Photos</h1>
//                     <ImageGallery items={images} />
//                 </div>
//             </main>
//             <Footer />
//         </div>
//     );
// }

// export default Photos;


import React, { useState } from 'react';
import Header from "../../layouts/Header/index";
import Footer from '../../layouts/Footer';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Book1 from '../../assets/tof6.jpg';
import Book2 from '../../assets/tof2.jpg';
import Book3 from '../../assets/tof7.jpg';
import Book4 from '../../assets/tof5.jpg';
import Book5 from '../../assets/tof8.jpg';
import Book6 from '../../assets/tof10.jpg';
import Book7 from '../../assets/tof3.jpg';
import Book8 from '../../assets/tof9.jpg';
import Book9 from '../../assets/tof1.jpg';

function Photos() {
    const [showCarousel, setShowCarousel] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const images = [
        {
            original: Book1,
            thumbnail: Book1,
        },
        {
            original: Book2,
            thumbnail: Book2,
        },
        {
            original: Book3,
            thumbnail: Book3,
        },
        {
            original: Book4,
            thumbnail: Book4,
        },
        {
            original: Book5,
            thumbnail: Book5,
        },
        {
            original: Book6,
            thumbnail: Book6,
        },
        {
            original: Book7,
            thumbnail: Book7,
        },
        {
            original: Book8,
            thumbnail: Book8,
        },
        {
            original: Book9,
            thumbnail: Book9,
        },
    ];

    const openCarousel = (index) => {
        setSelectedImageIndex(index);
        setShowCarousel(true);
    };

    const closeCarousel = () => {
        setShowCarousel(false);
    };

    return (
        <div>
            <Header />
            <main>
                <div className='photos'>
                    <h1 className='photos__h1'>Photos</h1>
                    <div className='photos__bloc'>
                        {images.map((image, index) => (
                            <img
                                key={index}
                                className="photos__book"
                                src={image.thumbnail}
                                alt={`book-${index}`}
                                onClick={() => openCarousel(index)}
                            />
                        ))}
                    </div>
                    {showCarousel && (
                        <div className="modal" style={{ display: 'block' }}>
                            <div className="modal-content">
                                <span className="close" onClick={closeCarousel}>&times;</span>
                                <ImageGallery
                                    items={images}
                                    startIndex={selectedImageIndex}
                                    showPlayButton={false}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Photos;
