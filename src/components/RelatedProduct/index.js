import React from "react";
import Slider from "react-slick";
import { AiOutlineStar, AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import './index.scss';
import { Link } from "react-router-dom";


function RelatedProduct() {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
    };

    return (
        <div className="related-product">
            <h2>Related Products</h2>
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
                            <div className="rating">
                                <span className="icon-ratings"><AiOutlineStar /></span>
                                <span className="icon-ratings"><AiOutlineStar /></span>
                                <span className="icon-ratings"><AiOutlineStar /></span>
                                <span className="icon-ratings"><AiOutlineStar /></span>
                                <span className="icon-ratings"><AiOutlineStar /></span>
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
                            <div className="rating">
                                <span className="icon-ratings"><AiOutlineStar /></span>
                                <span className="icon-ratings"><AiOutlineStar /></span>
                                <span className="icon-ratings"><AiOutlineStar /></span>
                                <span className="icon-ratings"><AiOutlineStar /></span>
                                <span className="icon-ratings"><AiOutlineStar /></span>
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
                            <div className="rating">
                                <span className="icon-ratings"><AiOutlineStar /></span>
                                <span className="icon-ratings"><AiOutlineStar /></span>
                                <span className="icon-ratings"><AiOutlineStar /></span>
                                <span className="icon-ratings"><AiOutlineStar /></span>
                                <span className="icon-ratings"><AiOutlineStar /></span>
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
                            <div className="rating">
                                <span className="icon-ratings"><AiOutlineStar /></span>
                                <span className="icon-ratings"><AiOutlineStar /></span>
                                <span className="icon-ratings"><AiOutlineStar /></span>
                                <span className="icon-ratings"><AiOutlineStar /></span>
                                <span className="icon-ratings"><AiOutlineStar /></span>
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
                            <div className="rating">
                                <span className="icon-ratings"><AiOutlineStar /></span>
                                <span className="icon-ratings"><AiOutlineStar /></span>
                                <span className="icon-ratings"><AiOutlineStar /></span>
                                <span className="icon-ratings"><AiOutlineStar /></span>
                                <span className="icon-ratings"><AiOutlineStar /></span>
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
                            <div className="rating">
                                <span className="icon-ratings"><AiOutlineStar /></span>
                                <span className="icon-ratings"><AiOutlineStar /></span>
                                <span className="icon-ratings"><AiOutlineStar /></span>
                                <span className="icon-ratings"><AiOutlineStar /></span>
                                <span className="icon-ratings"><AiOutlineStar /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}


export default RelatedProduct;