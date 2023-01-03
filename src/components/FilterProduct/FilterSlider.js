import React from "react";
import Slider from "react-slick";
import { AiOutlineStar, AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import './index.scss';
import { Link } from "react-router-dom";


function FilterSlider() {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
    };

    return (
        <Slider {...settings}>
            <div className="filter-slider-cart">
                <div className="filter-slider-cart-body">
                    <div className="filter-slider-cart-top">
                        <div className="_img">
                            <img src="http://umino.demo.towerthemes.com/image/cache/catalog/products/16_1-370x370.jpg" alt="" />
                        </div>
                        <div className="_cart_top_hover">
                            <div className="_img">
                                <img src="http://umino.demo.towerthemes.com/image/cache/catalog/products/16_4-370x370.jpg" alt="" />
                            </div>
                            <div class="_icons d-flex justify-content-center">
                                <div className="_icon">
                                    <BsHandbag />
                                </div>
                                <div className="_icon">
                                    <AiOutlineHeart />
                                </div>
                                <div className="_icon">
                                    <AiOutlineSearch />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="filter-slider-cart-bottom">
                        <div className="_price">
                            $60
                        </div>
                        <div className="_desc text-center">
                            <Link>Apple Cinema 30-inch HD Flat-Panel Display</Link>
                        </div>
                        <div class="rating">
                            <span class="icon-ratings"><AiOutlineStar /></span>
                            <span class="icon-ratings"><AiOutlineStar /></span>
                            <span class="icon-ratings"><AiOutlineStar /></span>
                            <span class="icon-ratings"><AiOutlineStar /></span>
                            <span class="icon-ratings"><AiOutlineStar /></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="filter-slider-cart">
                <div className="filter-slider-cart-body">
                    <div className="filter-slider-cart-top">
                        <div className="_img">
                            <img src="http://umino.demo.towerthemes.com/image/cache/catalog/products/16_1-370x370.jpg" alt="" />
                        </div>
                        <div className="_cart_top_hover">
                            <div className="_img">
                                <img src="http://umino.demo.towerthemes.com/image/cache/catalog/products/16_4-370x370.jpg" alt="" />
                            </div>
                            <div class="_icons d-flex justify-content-center">
                                <div className="_icon">
                                    <BsHandbag />
                                </div>
                                <div className="_icon">
                                    <AiOutlineHeart />
                                </div>
                                <div className="_icon">
                                    <AiOutlineSearch />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="filter-slider-cart-bottom">
                        <div className="_price">
                            $60
                        </div>
                        <div className="_desc text-center">
                            <Link>Apple Cinema 30-inch HD Flat-Panel Display</Link>
                        </div>
                        <div class="rating">
                            <span class="icon-ratings"><AiOutlineStar /></span>
                            <span class="icon-ratings"><AiOutlineStar /></span>
                            <span class="icon-ratings"><AiOutlineStar /></span>
                            <span class="icon-ratings"><AiOutlineStar /></span>
                            <span class="icon-ratings"><AiOutlineStar /></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="filter-slider-cart">
                <div className="filter-slider-cart-body">
                    <div className="filter-slider-cart-top">
                        <div className="_img">
                            <img src="http://umino.demo.towerthemes.com/image/cache/catalog/products/16_1-370x370.jpg" alt="" />
                        </div>
                        <div className="_cart_top_hover">
                            <div className="_img">
                                <img src="http://umino.demo.towerthemes.com/image/cache/catalog/products/16_4-370x370.jpg" alt="" />
                            </div>
                            <div class="_icons d-flex justify-content-center">
                                <div className="_icon">
                                    <BsHandbag />
                                </div>
                                <div className="_icon">
                                    <AiOutlineHeart />
                                </div>
                                <div className="_icon">
                                    <AiOutlineSearch />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="filter-slider-cart-bottom">
                        <div className="_price">
                            $60
                        </div>
                        <div className="_desc text-center">
                            <Link>Apple Cinema 30-inch HD Flat-Panel Display</Link>
                        </div>
                        <div class="rating">
                            <span class="icon-ratings"><AiOutlineStar /></span>
                            <span class="icon-ratings"><AiOutlineStar /></span>
                            <span class="icon-ratings"><AiOutlineStar /></span>
                            <span class="icon-ratings"><AiOutlineStar /></span>
                            <span class="icon-ratings"><AiOutlineStar /></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="filter-slider-cart">
                <div className="filter-slider-cart-body">
                    <div className="filter-slider-cart-top">
                        <div className="_img">
                            <img src="http://umino.demo.towerthemes.com/image/cache/catalog/products/16_1-370x370.jpg" alt="" />
                        </div>
                        <div className="_cart_top_hover">
                            <div className="_img">
                                <img src="http://umino.demo.towerthemes.com/image/cache/catalog/products/16_4-370x370.jpg" alt="" />
                            </div>
                            <div class="_icons d-flex justify-content-center">
                                <div className="_icon">
                                    <BsHandbag />
                                </div>
                                <div className="_icon">
                                    <AiOutlineHeart />
                                </div>
                                <div className="_icon">
                                    <AiOutlineSearch />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="filter-slider-cart-bottom">
                        <div className="_price">
                            $60
                        </div>
                        <div className="_desc text-center">
                            <Link>Apple Cinema 30-inch HD Flat-Panel Display</Link>
                        </div>
                        <div class="rating">
                            <span class="icon-ratings"><AiOutlineStar /></span>
                            <span class="icon-ratings"><AiOutlineStar /></span>
                            <span class="icon-ratings"><AiOutlineStar /></span>
                            <span class="icon-ratings"><AiOutlineStar /></span>
                            <span class="icon-ratings"><AiOutlineStar /></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="filter-slider-cart">
                <div className="filter-slider-cart-body">
                    <div className="filter-slider-cart-top">
                        <div className="_img">
                            <img src="http://umino.demo.towerthemes.com/image/cache/catalog/products/16_1-370x370.jpg" alt="" />
                        </div>
                        <div className="_cart_top_hover">
                            <div className="_img">
                                <img src="http://umino.demo.towerthemes.com/image/cache/catalog/products/16_4-370x370.jpg" alt="" />
                            </div>
                            <div class="_icons d-flex justify-content-center">
                                <div className="_icon">
                                    <BsHandbag />
                                </div>
                                <div className="_icon">
                                    <AiOutlineHeart />
                                </div>
                                <div className="_icon">
                                    <AiOutlineSearch />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="filter-slider-cart-bottom">
                        <div className="_price">
                            $60
                        </div>
                        <div className="_desc text-center">
                            <Link>Apple Cinema 30-inch HD Flat-Panel Display</Link>
                        </div>
                        <div class="rating">
                            <span class="icon-ratings"><AiOutlineStar /></span>
                            <span class="icon-ratings"><AiOutlineStar /></span>
                            <span class="icon-ratings"><AiOutlineStar /></span>
                            <span class="icon-ratings"><AiOutlineStar /></span>
                            <span class="icon-ratings"><AiOutlineStar /></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="filter-slider-cart">
                <div className="filter-slider-cart-body">
                    <div className="filter-slider-cart-top">
                        <div className="_img">
                            <img src="http://umino.demo.towerthemes.com/image/cache/catalog/products/16_1-370x370.jpg" alt="" />
                        </div>
                        <div className="_cart_top_hover">
                            <div className="_img">
                                <img src="http://umino.demo.towerthemes.com/image/cache/catalog/products/16_4-370x370.jpg" alt="" />
                            </div>
                            <div class="_icons d-flex justify-content-center">
                                <div className="_icon">
                                    <BsHandbag />
                                </div>
                                <div className="_icon">
                                    <AiOutlineHeart />
                                </div>
                                <div className="_icon">
                                    <AiOutlineSearch />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="filter-slider-cart-bottom">
                        <div className="_price">
                            $60
                        </div>
                        <div className="_desc text-center">
                            <Link>Apple Cinema 30-inch HD Flat-Panel Display</Link>
                        </div>
                        <div class="rating">
                            <span class="icon-ratings"><AiOutlineStar /></span>
                            <span class="icon-ratings"><AiOutlineStar /></span>
                            <span class="icon-ratings"><AiOutlineStar /></span>
                            <span class="icon-ratings"><AiOutlineStar /></span>
                            <span class="icon-ratings"><AiOutlineStar /></span>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
    );
}


export default FilterSlider;