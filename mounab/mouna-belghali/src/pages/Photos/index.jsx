import React from 'react';
import Header from "../../layouts/Header/index";
import Footer from '../../layouts/Footer';
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
    // useEffect(() => {
    //     $(document).ready(function() {
    //         /* activate the carousel */
    //         $("#modal-carousel").carousel({interval:false});
        
    //         /* change modal title when slide changes */
    //         $("#modal-carousel").on("slid.bs.carousel", function () {
    //              $(".modal-title")
    //              .html($(this)
    //              .find(".active img")
    //              .attr("title"));
    //         });
        
    //         /* when clicking a thumbnail */
    //         $(".row .thumbnail").click(function(){
    //          var content = $(".carousel-inner");
    //          var title = $(".modal-title");
           
    //          content.empty();  
    //          title.empty();
           
    //          var id = this.id;  
    //           var repo = $("#img-repo .item");
    //           var repoCopy = repo.filter("#" + id).clone();
    //           var active = repoCopy.first();
           
    //          active.addClass("active");
    //          title.html(active.find("img").attr("title"));
    //          content.append(repoCopy);
        
    //          // show the modal
    //          $("#modal-gallery").modal("show");
    //        });
        
    //     });
    // }, []);

    return (
        <div>
            <Header />
            <main>
                <div className='photos'>
                    <h1 className='photos__h1'>Photos</h1>

                    <div className='photos__bloc'>
                        <img className="photos__book" src={Book1} alt="book" />
                        <img className="photos__book" src={Book2} alt="book" />
                        <img className="photos__book" src={Book3} alt="book" />
                        <img className="photos__book" src={Book4} alt="book" />
                        <img className="photos__book" src={Book5} alt="book" />
                        <img className="photos__book" src={Book6} alt="book" />
                        <img className="photos__book" src={Book7} alt="book" />
                        <img className="photos__book" src={Book8} alt="book" />
                        <img className="photos__book" src={Book9} alt="book" />

                    </div>
                    
                    {/* <div class="row">
            
                       
                        <div class="hidden" id="img-repo">
    
   
                            <div class="item" id="image-1">
                                <img class="thumbnail img-responsive" alt='thumb' title="Image 11" src={Book1}/>
                            </div>

                            <div class="item" id="image-1">
                                <img class="thumbnail img-responsive" alt='thumb' title="Image 11" src={Book2}/>
                            </div>
    
                        </div>

                        <div class="modal" id="modal-gallery" role="dialog">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button class="close" type="button" data-dismiss="modal">×</button>
                                        <h3 class="modal-title">htgf</h3>
                                    </div>
                                    <div class="modal-body">
                                        <div id="modal-carousel" class="carousel"></div>
   
                                        <div class="carousel-inner"></div>           
                                    </div>
            
                                    <a class="carousel-control left" href="#modal-carousel" data-slide="prev"><i class="glyphicon glyphicon-chevron-left"></i></a>
                                    <a class="carousel-control right" href="#modal-carousel" data-slide="next"><i class="glyphicon glyphicon-chevron-right"></i></a>
            
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button class="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>

                    </div>             */}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Photos;
