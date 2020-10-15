import React, { useState, useEffect } from "react";
import { Wrapper } from "./style";
import Slider from "react-slick";

const SlideRoom = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <Wrapper>
        <Slider {...settings}>
          <div className="banner-item">
            <img src="https://via.placeholder.com/400x200" />
          </div>
          <div className="banner-item">
            <img src="https://via.placeholder.com/400x200" />
          </div>
          <div className="banner-item">
            <img src="https://via.placeholder.com/400x200" />
          </div>
          <div className="banner-item">
            <img src="https://via.placeholder.com/400x200" />
          </div>
          <div className="banner-item">
            <img src="https://via.placeholder.com/400x200" />
          </div>
        </Slider>
      </Wrapper>
    </>
  );
};

export default SlideRoom;
