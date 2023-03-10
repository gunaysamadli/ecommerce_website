import React, { useEffect, useState } from 'react';
import { CgViewDay, CgViewGrid, CgViewList } from "react-icons/cg";
import { Link } from 'react-router-dom';
import Slider from "@mui/material/Slider";
import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productAction';
import { getColors } from '../../redux/actions/colorAction';
import { getCategories } from '../../redux/actions/categoryAction';
import Products from '../../components/Products';

const Shop = () => {

    const products = useSelector(state => state.allProducts.products);

    useEffect(() => {
        if (products.length) {
            setFilter(products);
        }
    }, [products]);

    const [valuePrice, setValuePrice] = useState([1, 5000]);
    const [filter, setFilter] = useState([]);


    const handleSliderChange = (e) => {
        setValuePrice(e.target.value);
        const minPrice = valuePrice[0];
        const maxPrice = valuePrice[1];
        const newList = products.filter(
            (item) => item.price >= minPrice && item.price <= maxPrice
        );
        setFilter(newList);

    };



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
            setFilter([...products])
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
            setFilter([...current])
        }
    }



    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
        dispatch(getColors());
        dispatch(getCategories());
    }, [dispatch]);

    const colors = useSelector(state => state.allColors.colors);
    const categories = useSelector(state => state.allCategories.categories);

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
                                    max={5000}
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
                                            <Link>{colorName} <span>()</span></Link>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="filter-attribute-container">
                                <label>Categories</label>
                                {
                                    categories.map(({ id, name }) => (
                                        <div className="list-group-item" key={id}>
                                            <Link>{name} <span>()</span></Link>
                                        </div>
                                    ))
                                }
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
                                <Products filter={filter}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop