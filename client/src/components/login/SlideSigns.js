import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SlideSigns() {
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
  )
}
