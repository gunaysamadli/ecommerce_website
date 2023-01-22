import React from "react";
import Slider from "react-slick";
import './index.scss';
import Button from '../Button'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSliders } from "../../redux/actions/sliderAction";

function SimpleSlider() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSliders());
  }, [dispatch]);


  const sliders = useSelector(state => state.allSliders.sliders);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Slider {...settings}>
      {sliders.map(({ id, title, subtitle, imageName, buttonName }) => (
        <div className="slider-item" key={id}>
          <img src={imageName} alt="" />
          <div className="slider-item_body">
            <div className="col-lg-6">
              <h2>{title}</h2>
              <p>{subtitle}</p>
              <Button base >{buttonName}</Button>
            </div>
          </div>
        </div>
      ))}

    </Slider >
  );
}
export default SimpleSlider;
