import React, { Component } from "react";
import Slider from "react-slick";
import './index.scss'

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            arrows:false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <Slider {...settings}>
                <div className="slider-item">
                    <img src="http://umino.demo.towerthemes.com/image/cache/catalog/slider/slideshow1-2-1920x470.jpg" alt="" />
                    <div className="slider-item_body">
                        <div className="col-lg-6">
                            <h2>Wooden Chair</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit debitis ipsum autem quibusdam! Sed quaerat, laboriosam assumenda amet numquam autem odio placeat dicta repellendus nesciunt hic consectetur itaque nisi delectus!</p>
                            <button>Read More</button>
                        </div>
                    </div>
                </div>
                <div className="slider-item">
                    <img src="http://umino.demo.towerthemes.com/image/cache/catalog/slider/slideshow1-1-1920x470.jpg" alt="" />
                    <div className="slider-item_body">
                        <div className="col-lg-6">
                            <h2>Wooden Chair</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit debitis ipsum autem quibusdam! Sed quaerat, laboriosam assumenda amet numquam autem odio placeat dicta repellendus nesciunt hic consectetur itaque nisi delectus!</p>
                            <button>Read More</button>
                        </div>
                    </div>
                </div>
            </Slider>
        );
    }
}