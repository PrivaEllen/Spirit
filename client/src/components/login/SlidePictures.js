import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import pictureFirst from '../../images/pictureFirst.png';
import pictureSecond from '../../images/pictureSecond.png';
import pictureThird from '../../images/pictureThird.png';
import pictureForth from '../../images/pictureForth.png';
import pictureFifth from '../../images/pictureFifth.png';

export default function SlidePictures() {
  const renderPictures = () =>
    [pictureFirst, pictureSecond, pictureThird, pictureForth, pictureFifth].map(num => (
      <div>
        <img src={num} alt='infographic' style={{height: '444px', width: '100%'}}></img>
    </div>
  ));

  const renderSigns = () =>
    ['spirit для мобильных устройств',
      'настройте сайт под компанию',
      'сортируйте тесты по категориям',
      'мгновенная аналитика тестов',
      'следите за всеми участниками'].map(num => (
    <div>
      <span className='container_form_general_infographics_shell_signature'>{num}</span>
    </div>
  ));
  
  return(
    <>
      <div className="container_form_general_infographics_picture">
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
      <div className='container_form_general_infographics_shell'>
        <Slider
            dots={false}
            arrows={false}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={10000}
        >
        {renderSigns()}
        </Slider>
      </div>
    </>
    
  )
}
