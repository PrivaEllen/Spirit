import React from 'react';

import exmpl1 from './images/exmpl1.png';
import exmpl2 from './images/exmpl2.jpg';
import exmpl3 from './images/exmpl3.jpg';
import Slider from 'react-slick'

export default function Carousel() 
{
    const renderPictures = () =>
      [exmpl1, exmpl2, exmpl3].map(num => (
        <div>
          <img src={num} ></img>
      </div>
    ));
    
    return(
      <div>
        <Slider
          dots={false}
          arrows={false}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={10000}
        >
        {renderPictures()}
        </Slider>
      </div>
    )
}

