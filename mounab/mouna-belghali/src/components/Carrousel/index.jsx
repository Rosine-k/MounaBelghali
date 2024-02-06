import React from 'react';
import Book1 from '../../assets/tof6.jpg';
import Book2 from '../../assets/tof2.jpg';
import Book3 from '../../assets/tof7.jpg';
import Book4 from '../../assets/tof5.jpg';
import Book5 from '../../assets/tof8.jpg';
import Book6 from '../../assets/tof10.jpg';
import Book7 from '../../assets/tof3.jpg';
import Book8 from '../../assets/tof9.jpg';
import Book9 from '../../assets/tof1.jpg';


function CarouselTest() {
  return (
    <div id="carouselExample" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">

      <div class="carousel-item active">
                                                <img src={Book1} class="d-block w-100" alt="book 1"/>
                                            </div>

                                            <div class="carousel-item">
                                                <img src={Book2} class="d-block w-100" alt="book 2"/>
                                            </div>

                                            <div class="carousel-item">
                                                <img src={Book3} class="d-block w-100" alt="book 3"/>
                                            </div>

                                            <div class="carousel-item">
                                                <img src={Book4} class="d-block w-100" alt="book 2"/>
                                            </div>

                                            <div class="carousel-item">
                                                <img src={Book5} class="d-block w-100" alt="book 2"/>
                                            </div>

                                            <div class="carousel-item">
                                                <img src={Book6} class="d-block w-100" alt="book 2"/>
                                            </div>

                                            <div class="carousel-item">
                                                <img src={Book7} class="d-block w-100" alt="book 2"/>
                                            </div>

                                            <div class="carousel-item">
                                                <img src={Book8} class="d-block w-100" alt="book 2"/>
                                            </div>

                                            <div class="carousel-item">
                                                <img src={Book9} class="d-block w-100" alt="book 2"/>
                                            </div>

      </div>

      <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default CarouselTest;
