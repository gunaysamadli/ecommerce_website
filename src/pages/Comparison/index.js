import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { AiOutlineStar } from "react-icons/ai";

const Comparison = () => {
    return (
        <div className='comparison'>
            <div className="container">
                <div id="content" className="col-sm-12">
                    <h1>Product Comparison</h1>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <td colspan="3"><strong>Product Details</strong></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Product</td>
                                <td>
                                    <Link to="http://umino.demo.towerthemes.com/macbook">
                                        <strong>MacBook Pro - 13" Display with Touch Bar - Intel Core i5</strong>
                                    </Link>
                                </td>
                                <td>
                                    <Link to="http://umino.demo.towerthemes.com/macbook-air">
                                        <strong>MacBook Air - 13.3" Retina Display - Intel Core i5</strong>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>Image</td>
                                <td className="text-center">
                                    <img src="http://umino.demo.towerthemes.com/image/cache/catalog/products/12_1-90x90.jpg" alt="MacBook Pro - 13&quot; Display with Touch Bar - Intel Core i5" title="MacBook Pro - 13&quot; Display with Touch Bar - Intel Core i5" className="img-thumbnail" />
                                </td>
                                <td class="text-center">
                                    <img src="http://umino.demo.towerthemes.com/image/cache/catalog/products/11_1-90x90.jpg" alt="MacBook Air - 13.3&quot; Retina Display - Intel Core i5" title="MacBook Air - 13.3&quot; Retina Display - Intel Core i5" className="img-thumbnail" />
                                </td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td>£368.73</td>
                                <td>£736.23</td>
                            </tr>
                            <tr>
                                <td>Model</td>
                                <td>product</td>
                                <td>product</td>
                            </tr>
                            <tr>
                                <td>Brand</td>
                                <td>Apple</td>
                                <td>Apple</td>
                            </tr>
                            <tr>
                                <td>Availability</td>
                                <td>In Stock</td>
                                <td>In Stock</td>
                            </tr>
                            <tr>
                                <td>Rating</td>
                                <td className="rating">
                                    <span className="icon-ratings"><AiOutlineStar /></span>
                                    <span className="icon-ratings"><AiOutlineStar /></span>
                                    <span className="icon-ratings"><AiOutlineStar /></span>
                                    <span className="icon-ratings"><AiOutlineStar /></span>
                                    <span className="icon-ratings"><AiOutlineStar /></span>
                                    <p>Based on 1 reviews</p>
                                </td>
                                <td className="rating">
                                    <span className="icon-ratings"><AiOutlineStar /></span>
                                    <span className="icon-ratings"><AiOutlineStar /></span>
                                    <span className="icon-ratings"><AiOutlineStar /></span>
                                    <span className="icon-ratings"><AiOutlineStar /></span>
                                    <span className="icon-ratings"><AiOutlineStar /></span>
                                    <p> Based on 1 reviews</p>
                                </td>
                            </tr>
                            <tr>
                                <td>Summary</td>
                                <td className="description">
                                    Intel Core 2 Duo processor
                                    Powered by an Intel Core 2 Duo processor at speeds up to 2.16GHz, the new MacBook is the fastest ever.
                                    1GB memory, larger hard drives

                                    The new MacBoo..</td>
                                <td className="description">
                                    MacBook Air is ultrathin, ultraportable, and ultra unlike anything else. But you don’t lose inches and pounds overnight. It’s the result of rethinking conventions. Of multiple wireless ..</td>
                            </tr>
                            <tr>
                                <td>Weight</td>
                                <td>0.00kg</td>
                                <td>0.00kg</td>
                            </tr>
                            <tr>
                                <td>Dimensions (L x W x H)</td>
                                <td>0.00mm x 0.00mm x 0.00mm</td>
                                <td>0.00mm x 0.00mm x 0.00mm</td>
                            </tr>
                        </tbody>

                        <thead>
                            <tr>
                                <td colspan="3"><strong>Memory</strong></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>test 1</td>
                                <td> 8gb</td>
                                <td></td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <td colspan="3"><strong>Processor</strong></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>No. of Cores</td>
                                <td> 1</td>
                                <td></td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="button" value="Add to Cart" className="btn btn-primary btn-block" />
                                    <Link to="http://umino.demo.towerthemes.com/index.php?route=product/compare&amp;remove=43" className="btn btn-danger btn-block">Remove</Link>
                                </td>
                                <td>
                                    <input type="button" value="Add to Cart" className="btn btn-primary btn-block" />
                                    <Link to="http://umino.demo.towerthemes.com/index.php?route=product/compare&amp;remove=44" className="btn btn-danger btn-block">Remove</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Comparison