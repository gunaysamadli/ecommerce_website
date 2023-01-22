import React from "react";
import Slider from "react-slick";
import './index.scss';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBrands } from "../../redux/actions/brandAction";


function Brand() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBrands());
    }, [dispatch]);

    const brands = useSelector(state => state.allBrands.brands);

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
    };

    return (
        <div className="container">
            <div className="brand">
                <Slider {...settings}>
                    {brands.map(({ id, imageName, name }) => (
                        <div className="brand-cart" key={id}>
                            <div className="brand-cart-body">
                                <Link>
                                    <img src={imageName} alt={name} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}


export default Brand;