import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import exmpl1 from './images/exmpl1.png';
import exmpl2 from './images/exmpl2.png';
import exmpl3 from './images/exmpl3.png';
import Slider from 'react-slick'


export default function Carousel() 
{
  return(
    <div className="container_pictures">
      <Slider
        dots={false}
        arrows={true}
     
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={10000}
        className={"container_picture_slider"}
      >
        <div>
          <div>
            <img src={exmpl1} className='container_picture_slider_img'></img>
          </div>
         
        </div>
        <div>
          <div>
            <img src={exmpl2} className='container_picture_slider_img'></img>
          </div>
         
        </div>
        <div>
          <div>
            <img src={exmpl3} className='container_picture_slider_img'></img>
          </div>
         
        </div>

    

      </Slider>
    </div>
    )
}

