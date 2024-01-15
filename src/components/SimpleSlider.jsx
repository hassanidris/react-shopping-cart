import React from 'react'
import Slider from "react-slick";
import bnr1 from '../assests/banner.png'
import bnr2 from '../assests/2.jpg'
import bnr3 from '../assests/3.jpg'

const SimpleSlider = () => {
    var settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
    return (
        <Slider {...settings}>
          <div>
            <h3><img src={bnr1} /></h3>
          </div>
          <div>
            <h3><img src={bnr2} /></h3>
          </div>
          <div>
            <h3><img src={bnr3} /></h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      );
}

export default SimpleSlider