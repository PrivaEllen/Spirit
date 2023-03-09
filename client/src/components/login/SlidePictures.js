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
  return(
    <div className="container_form_general_infographics_picture">
      <Slider
        dots={false}
        arrows={false}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={10000}
        className={"container_form_general_infographics_picture_slider"}
      >
        <div>
          <div>
            <img src={pictureFirst} className='container_form_general_infographics_picture_slider_img'></img>
          </div>
          <div className='container_form_general_infographics_picture_slider_shell'>
            <span className='container_form_general_infographics_picture_slider_shell_signature'>spirit для мобильных устройств</span>
          </div>
        </div>

        <div>
          <div>
            <img src={pictureSecond} className='container_form_general_infographics_picture_slider_img'></img>
          </div>
          <div className='container_form_general_infographics_picture_slider_shell'>
            <span className='container_form_general_infographics_picture_slider_shell_signature'>настройте сайт под компанию</span>
          </div>
        </div>
        
        <div>
          <div>
            <img src={pictureThird} className='container_form_general_infographics_picture_slider_img'></img>
          </div>
          <div className='container_form_general_infographics_picture_slider_shell'>
            <span className='container_form_general_infographics_picture_slider_shell_signature'>сортируйте тесты по категориям</span>
          </div>
        </div>

        <div>
          <div>
            <img src={pictureForth} className='container_form_general_infographics_picture_slider_img'></img>
          </div>
          <div className='container_form_general_infographics_picture_slider_shell'>
            <span className='container_form_general_infographics_picture_slider_shell_signature'>мгновенная аналитика тестов</span>
          </div>
        </div>

        <div>
          <div>
            <img src={pictureFifth} className='container_form_general_infographics_picture_slider_img'></img>
          </div>
          <div className='container_form_general_infographics_picture_slider_shell'>
            <span className='container_form_general_infographics_picture_slider_shell_signature'>следите за всеми участниками</span>
          </div>
        </div>
      </Slider>
    </div>
  )
}
