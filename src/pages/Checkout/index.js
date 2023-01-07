import React from 'react';
import { Link } from 'react-router-dom';
import { GrUpdate } from "react-icons/gr";
import { GiCancel } from "react-icons/gi";
import './index.scss';

const Checkout = () => {
    return (
        <div className='checkout'>
            <div className="container">
                <div className="checkout-cart">
                    <h1>Shopping Cart</h1>
                    <form>
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <td className="text-center">Image</td>
                                        <td className="text-left">Product Name</td>
                                        <td className="text-left">Model</td>
                                        <td className="text-left">Quantity</td>
                                        <td className="text-right">Unit Price</td>
                                        <td className="text-right">Total</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-center">
                                            <Link>
                                                <img src="http://umino.demo.towerthemes.com/image/cache/catalog/products/8_1-90x90.jpg" alt="aa" />
                                            </Link>
                                        </td>
                                        <td className="text-left"><Link to="http://umino.demo.towerthemes.com/htc-touch-hd">HTC Touch HD Windows Mobile smartphone</Link>
                                            <p>Reward Points: 400</p>
                                        </td>
                                        <td className="text-left">product</td>
                                        <td className="text-left">
                                            <div class="input-group btn-block d-flex align-items-center" >
                                                <input type="text" name="quantity[449]" value="1" size="1" className="form-control" />
                                                <span className="input-group-btn d-flex">
                                                    <button type="submit"><GrUpdate /></button>
                                                    <button type="button"><GiCancel /></button>
                                                </span>
                                            </div>
                                        </td>
                                        <td className="text-right">£74.73</td>
                                        <td className="text-right">£74.73</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </form>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td className="text-right"><strong>Sub-Total:</strong></td>
                                <td className="text-right">£4,777.50</td>
                            </tr>
                            <tr>
                                <td className="text-right"><strong>Eco Tax (-2.00):</strong></td>
                                <td className="text-right">£95.55</td>
                            </tr>
                            <tr>
                                <td className="text-right"><strong>Total:</strong></td>
                                <td className="text-right">£5,828.55</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="buttons d-flex align-items-center justify-content-between">
                        <div className="pull-left">
                            <Link to="http://umino.demo.towerthemes.com/" >
                                Continue Shopping
                            </Link>
                        </div>
                        <div className="pull-right">
                            <Link to="http://umino.demo.towerthemes.com/index.php?route=checkout/checkout">
                                Checkout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout