import React from 'react';
import "./index.scss";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Button from '../Button'
import RelatedProduct from '../RelatedProduct';

const Detail = () => {
    return (
        <div className='detail'>
            <div className="container">
                <div className="product-details">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="detail-product">
                                <div className="_img">
                                    <img src="http://umino.demo.towerthemes.com/image/cache/catalog/products/1-1000x1000.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="product-info-details">
                                <div className="_review_top d-flex align-items-center justify-content-between">
                                    <div className="rating">
                                        <span className="icon-ratings"><AiOutlineStar /></span>
                                        <span className="icon-ratings"><AiOutlineStar /></span>
                                        <span className="icon-ratings"><AiOutlineStar /></span>
                                        <span className="icon-ratings"><AiOutlineStar /></span>
                                        <span className="icon-ratings"><AiOutlineStar /></span>
                                    </div>
                                    <Link><span>(1)</span>Reviews</Link>
                                    <Link>Write a Review</Link>
                                </div>
                                <div className='product-name-price'>
                                    <h2 className='product-name'>Apple iPod classic 160 GB Black - 7th Generation</h2>
                                    <p className='product-price'>$74</p>
                                </div>
                                <ul className="list-unstyled">
                                    <li>Brand: <Link>Apple</Link></li>
                                    <li>Product Code: <span>product</span></li>
                                    <li>Availability: <span>In Stock</span></li>
                                    <li>Ex Tax: <span>£61.25</span></li>
                                </ul>
                                <div className="form-group">
                                    <div className='add-product-form d-flex'>
                                        <label className="control-label" for="input-quantity">Qty</label>
                                        <input type="text" name="quantity" value="1" size="2" id="input-quantity" className="form-control input-qyt" />
                                        <input type="hidden" name="product_id" value="48" />
                                        <button type="button" id="button-cart" data-loading-text="Loading..." className="btn btn-primary btn-lg btn-block">Add to Cart</button>
                                    </div>
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-default btn-wishlist" title="Add to Wish List">Add to Wish List</button>
                                        <button type="button" className="btn btn-default btn-compare" title="Compare this Product">Compare this Product</button>
                                    </div>
                                </div>
                                <p className="product-tags">Tags:
                                    <Link>Plazathemes</Link>,
                                    <Link>Table</Link>,
                                    <Link>Woo</Link>,
                                    <Link>e-Commerce</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-reviews">
                    <h3>Reviews <span>(1)</span></h3>
                    <div className="reviews">
                        <table className="table table-striped table-bordered">
                            <tbody>
                                <tr>
                                    <td><strong>Plaza Themes</strong></td>
                                    <td className="d-flex justify-content-end">06/05/2018</td>
                                </tr>
                                <tr>
                                    <td colspan="2"><p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                                        <div className="rating">
                                            <span className="icon-ratings"><AiOutlineStar /></span>
                                            <span className="icon-ratings"><AiOutlineStar /></span>
                                            <span className="icon-ratings"><AiOutlineStar /></span>
                                            <span className="icon-ratings"><AiOutlineStar /></span>
                                            <span className="icon-ratings"><AiOutlineStar /></span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <form className="form-horizontal" id="form-review">
                            <h2>Write a review</h2>
                            <div className="form-group required">
                                <div className="col-sm-12">
                                    <label className="control-label" for="input-name">Your Name</label>
                                    <input type="text" name="name" value="" id="input-name" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group required">
                                <div className="col-sm-12">
                                    <label className="control-label" for="input-review">Your Review</label>
                                    <textarea name="text" rows="5" id="input-review" className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="form-group required">
                                <div className="col-sm-12 d-flex">
                                    <label className="control-label">Rating</label>
                                    <div className="rating">
                                        <span className="icon-ratings"><AiOutlineStar /></span>
                                        <span className="icon-ratings"><AiOutlineStar /></span>
                                        <span className="icon-ratings"><AiOutlineStar /></span>
                                        <span className="icon-ratings"><AiOutlineStar /></span>
                                        <span className="icon-ratings"><AiOutlineStar /></span>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end">
                                <div className="float-right">
                                    <Button base type="button" id="button-review" data-loading-text="Loading...">Continue</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="product-related">
                    <RelatedProduct />
                </div>
            </div>
        </div>
    )
}

export default Detail