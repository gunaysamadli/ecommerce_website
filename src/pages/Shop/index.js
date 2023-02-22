import React, { useEffect, useState } from 'react'
import { AiOutlineStar, AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { CgViewDay, CgViewGrid, CgViewList } from "react-icons/cg";
import { Link } from 'react-router-dom';
import Slider from "@mui/material/Slider";
import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productAction';
import { getColors } from '../../redux/actions/colorAction';

const Shop = () => {

    const [valuePrice, setValuePrice] = useState([1, 1000]);

    const products = useSelector(state => state.allProducts.products);

    const [objectsToShow, setToShow] = useState(products);

    const compare = (a, b, ascendingOrder) => {
        if (a < b) {
            return ascendingOrder ? -1 : 1;
        }
        if (a > b) {
            return ascendingOrder ? 1 : -1;
        }
        return 0;
    }

    const handleChange = (value) => {
        if (value === 'none') {
            setToShow([...products])
        } else {
            let toType, toAscending
            switch (value) {
                case 'ascending': toType = true; toAscending = true; break;
                case 'descending': toType = true; toAscending = false; break;
                case 'high': toType = false; toAscending = true; break;
                case 'low': toType = false; toAscending = false; break;
                default:
            }
            let current = [...products]
            current.sort((a, b) => toType ?
                compare(a.name, b.name, toAscending)
                :
                compare(a.price, b.price, toAscending))
            setToShow([...current])
        }
    }

    const handleSliderChange = (e) => {
        setValuePrice(e.target.value);
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
        dispatch(getColors())
    }, [dispatch]);

    const colors = useSelector(state => state.allColors.colors);


    return (
        <div className='shop'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="shop-left">
                            <div className="product_slider_range">
                                <Slider
                                    value={valuePrice}
                                    onChange={handleSliderChange}
                                    min={1}
                                    max={1000}
                                />
                                <p>
                                    {" "}
                                    {valuePrice[0]} &&  {valuePrice[1]}
                                </p>
                            </div>
                            <div className="filter-attribute-container">
                                <label>Color</label>
                                {
                                    colors.map(({ id, colorName }) => (
                                        <div className="list-group-item" key={id}>
                                            <Link>{colorName} <span>(4)</span></Link>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="filter-attribute-container">
                                <label>Categories</label>
                                <div className="list-group-item">
                                    <Link>Basket <span>(4)</span></Link>
                                </div>
                                <div className="list-group-item">
                                    <Link>Basket <span>(4)</span></Link>
                                </div>
                                <div className="list-group-item">
                                    <Link>Basket <span>(4)</span></Link>
                                </div>
                                <div className="list-group-item">
                                    <Link>Basket <span>(4)</span></Link>
                                </div>
                                <div className="list-group-item">
                                    <Link>Basket <span>(4)</span></Link>
                                </div>
                            </div>
                            <div className="filter-attribute-container">
                                <img src="http://umino.demo.towerthemes.com/image/catalog/ptblock/img-sidebar.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="shop-right">
                            <div className="shop-right_content">
                                <div className="shop_right_img">
                                    <div className="_img">
                                        <img src="http://umino.demo.towerthemes.com/image/cache/catalog/category-image/category-image-870x457.jpg" alt="" />
                                    </div>
                                </div>
                                <h1>SHOP FURNITURE</h1>
                                <p>We Assist you in Different Fields of Digital Marketing and Web Designing. Skilled Designers. Effective Services. Highlights: Highly Skilled Developers And Designers Available, Providing Effective And Result Oriented Services.</p>
                            </div>
                            <div className="product_layout_filter_section">
                                <div className="toolbar">
                                    <div className="row align-items-center">
                                        <div className="col-lg-3">
                                            <div className="_icons d-flex">
                                                <div className="_icon">
                                                    <CgViewDay title='4' />
                                                </div>
                                                <div className="_icon">
                                                    <CgViewGrid title='8' />
                                                </div>
                                                <div className="_icon">
                                                    <CgViewList title='List' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="product_compare">
                                                <Link>Product Compare</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="product_sort">
                                                <div className="form-group input-group input-group-sm">
                                                    <label className="input-group-addon d-flex align-items-center" for="input-sort">Sort By:</label>
                                                    <select onChange={(e) => handleChange(e.target.value)} id="input-sort" className="form-control" >
                                                        <option value="none" selected="selected">Default</option>
                                                        <option value="ascending">Name (A - Z)</option>
                                                        <option value="descending">Name (Z - A)</option>
                                                        <option value="high">Price (Low &gt; High)</option>
                                                        <option value="low">Price (High &gt; Low)</option>
                                                        <option>Rating (Highest)</option>
                                                        <option>Rating (Lowest)</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="product_show">
                                                <div className="form-group input-group input-group-sm">
                                                    <label className="input-group-addon  d-flex align-items-center" for="input-limit">Show:</label>
                                                    <select id="input-limit" className="form-control">
                                                        <option selected="selected">12</option>
                                                        <option>25</option>
                                                        <option>50</option>
                                                        <option>75</option>
                                                        <option >100</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product_layouts">
                                    <div className="row">
                                        {
                                            objectsToShow.map(({ id, name, price, imageName }) => (

                                                <div className="col-lg-6" key={id}>
                                                    <div className='product-cart'>
                                                        <div className="product-cart-top">
                                                            <div className="cart_top">
                                                                <div className="_img">
                                                                    <img
                                                                        src={imageName}
                                                                        alt={name}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="cart_top_hover">
                                                                <div className="_img">
                                                                    <img
                                                                        src={imageName}
                                                                        alt={name}
                                                                    />
                                                                </div>
                                                                <div className="_icons d-flex justify-content-center">
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
                                                        <div className="product-cart-bottom">
                                                            <div className="_price">
                                                                ${price}
                                                            </div>
                                                            <div className="_desc text-center">
                                                                <Link>{name}</Link>
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
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop