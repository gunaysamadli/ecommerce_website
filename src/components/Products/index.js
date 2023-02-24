import React from 'react'
import { AiOutlineStar, AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { Link } from 'react-router-dom'
import './index.scss';
import { useAppContext } from '../../context/App';

const Products = ({filter}) => {
    const [{ onAdd }] = useAppContext();
    return (
        <div className="product_layouts">
            <div className="row">
                {filter.length ?
                    filter.map((product) => (

                        <div className="col-lg-6" key={product.id}>
                            <div className='product-cart'>
                                <div className="product-cart-top">
                                    <div className="cart_top">
                                        <div className="_img">
                                            <img
                                                src={product.imageName}
                                                alt={product.name}
                                            />
                                        </div>
                                    </div>
                                    <div className="cart_top_hover">
                                        <div className="_img">
                                            <img
                                                src={product.imageName}
                                                alt={product.name}
                                            />
                                        </div>
                                        <div className="_icons d-flex justify-content-center">
                                            <div onClick={()=>onAdd(product)} className="_icon">
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
                                        ${product.price}
                                    </div>
                                    <div className="_desc text-center">
                                        <Link>{product.name}</Link>
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
                    : <div></div>
                }
            </div>
        </div>
    )
}

export default Products